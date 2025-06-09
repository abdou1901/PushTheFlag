import openai from "../config/openai.mjs";
import slugify from "slugify";
import { OPENROUTE_MODEL } from "../utils/env.mjs";
import { getCodeforecesMetadata } from "../utils/codeforces.api.mjs";
import JSON5 from "json5";

function sanitizePromptInput(str) {
  return str.replace(/[`$]/g, '_');
}

function isValidCode(code) {
  return typeof code === "string" && code.length <= 50000;
}

function isValidUrl(rawUrl) {
  try {
    const url = new URL(rawUrl);
    if (!url.hostname.endsWith("codeforces.com")) return false;
    let match = url.pathname.match(/^\/problemset\/problem\/(\d+)\/([A-Z])\/?$/);
    if (match) return { contestId: match[1], problemIndex: match[2] };
    match = url.pathname.match(/^\/contest\/(\d+)\/problem\/([A-Z])\/?$/);
    if (match) return { contestId: match[1], problemIndex: match[2] };
    return false;
  } catch {
    return false;
  }
}

function isValidLanguage(language) {
  const valid = ["python","python3","c","c#","c++","java","javascript","typescript","php","swift","go","ruby","rust","kotlin","dart"];
  return valid.includes(language.toLowerCase());
}

/**
 * Cleans the raw AI response by extracting the JSON object
 * and stripping markdown fences or wrapper text.
 */
function processRawResponse(raw) {
  const noFences = raw.replace(/^```(?:json)?|```$/g, '').trim();
  const match = noFences.match(/\{[\s\S]*\}$/);
  return match ? match[0] : noFences;
}

export async function generateDocumentationCodeforces({ url, code, language, userPrefs = {} }) {
  try {
    url = sanitizePromptInput(url).trim();
    const id = isValidUrl(url);
    if (!id) throw new Error("Please enter a valid Codeforces URL (e.g. https://codeforces.com/problemset/problem/2114/F)");

    language = language.trim().toLowerCase();
    if (!isValidLanguage(language)) throw new Error("Please enter a valid language");

    code = sanitizePromptInput(code);
    if (!isValidCode(code)) throw new Error("Maximum code length is 50000 characters");

    const meta = await getCodeforecesMetadata(id.contestId, id.problemIndex);

    const extra = [];
    if (meta.rating >= 1800) extra.push('Explain technical details and tricky parts deeply.');
    else if (meta.rating >= 1100) extra.push('Provide balanced explanations with key insights.');
    else extra.push('Keep explanations clear and concise.');

    if (userPrefs.tone === 'beginner') extra.push('Use simple analogies and avoid jargon.');
    if (userPrefs.tone === 'advanced') extra.push('Include deeper insights and trade-offs.');
    if (userPrefs.tone === 'dev') extra.push('Be concise and code-focused, include relevant snippets.');

    const prompt = `A user has solved Codeforces problem "${meta.name}" (rating: ${meta.rating}).\n` +
                   `URL: ${url}\n\n` +
                   `Language: ${language}\n\n` +
                   `User's submitted solution:\n[[[BEGIN CODE BLOCK]]]\n\`\`\`\n${code}\n\`\`\`\n[[[END CODE BLOCK]]]\n\n` +
                   extra.map(x => `- ${x}`).join("\n") +
                   `\n\nIMPORTANT: Return only a single JSON object with the following structure:\n` +
                   `{\n` +
                   `  \"files\": {\n` +
                   `    \"solution.${language}\": \"<exact code>\",\n` +
                   `    \"README.md\": \"<GitHub-style Markdown as single-line string with \\n for newlines>\"\n` +
                   `  }\n` +
                   `}\n\n` +
                   `Rules:\n` +
                   `- No additional keys or wrappers.\n` +
                   `- Escape all double quotes as \\\" and encode newlines as \\\n.\n` +
                   `- Do NOT include wrapper text or markdown fences.\n` +
                   `- \"solution.${language}\" must exactly match the submitted code.\n` +
                   `- README.md must include summary, approach, complexity, test cases, and insights with proper headings and bullets.`;

    const completion = await openai.chat.completions.create({
      model: OPENROUTE_MODEL,
      messages: [
        { role: 'system', content: 'You generate code documentation JSON.' },
        { role: 'user', content: prompt }
      ]
    });

    const aiRaw = completion.choices[0].message.content;
    if (!aiRaw) throw new Error('AI did not return any response');

    const cleaned = processRawResponse(aiRaw.trim());
    let parsed;
    try {
      parsed = JSON5.parse(cleaned);
    } catch (e) {
      console.error('Failed to parse JSON:', cleaned);
      throw new Error('AI response is not valid JSON.');
    }

    const solKey = Object.keys(parsed.files)[0];
    parsed.files[solKey] = parsed.files[solKey].trim();

    return { needsClarification: false, doc: parsed, meta, path: `codeforces/CF-${meta.contestId}-${slugify(meta.name)}` };
  } catch (err) {
    console.error(err);
    if (err.message.includes('clarification')) {
      return { needsClarification: true, question: err.message };
    }
    return { error: err.message || 'Unknown error occurred.' };
  }
}
