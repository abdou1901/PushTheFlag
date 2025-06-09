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

export async function generateDocumentationCodeforces({ url, code, language, userPrefs = {} }) {
  try {
    // Validate inputs
    url = sanitizePromptInput(url).trim();
    const id = isValidUrl(url);
    if (!id) throw new Error("Please enter a valid Codeforces URL (e.g. https://codeforces.com/problemset/problem/2114/F)");

    language = language.trim().toLowerCase();
    if (!isValidLanguage(language)) throw new Error("Please enter a valid language");

    code = sanitizePromptInput(code);
    if (!isValidCode(code)) throw new Error("Maximum code length is 50000 characters");

    // Fetch problem metadata
    const meta = await getCodeforecesMetadata(id.contestId, id.problemIndex);

    // Build extra instructions based on rating and user tone
    const extra = [];
    if (meta.rating >= 1800) extra.push('Explain technical details and tricky parts deeply.');
    else if (meta.rating >= 1100) extra.push('Provide balanced explanations with key insights.');
    else extra.push('Keep explanations clear and concise.');

    if (userPrefs.tone === 'beginner') extra.push('Use simple analogies and avoid jargon.');
    if (userPrefs.tone === 'advanced') extra.push('Include deeper insights and trade-offs.');
    if (userPrefs.tone === 'dev') extra.push('Be concise and code-focused, include relevant snippets.');

    // Compose prompt
    const prompt = `A user has solved Codeforces problem "${meta.name}" (rating: ${meta.rating}).
URL: ${url}

Language: ${language}

User's submitted solution:
[[[BEGIN CODE BLOCK]]]
\`\`\`
${code}
\`\`\`
[[[END CODE BLOCK]]]

${extra.map(x => `- ${x}`).join("\n")}

IMPORTANT: Return only a single JSON object with the following structure:
{
  "files": {
    "solution.${language}": "<exact multi-line code>",
    "README.md": "<GitHub-style Markdown as a single-line string with \n for newlines>"
  }
}

Rules:
- No additional keys or wrappers.
- Escape all double quotes as \" and encode actual newlines as \n.
- Do NOT include any wrapper text or markdown fences.
- The value for "solution.${language}" must match exactly the submitted code.
- The README.md must include problem summary, approach, complexity, test cases, and insights, well-structured with markdown headings and bullets.
`;

    // Call OpenAI
    const completion = await openai.chat.completions.create({
      model: OPENROUTE_MODEL,
      messages: [
        { role: 'system', content: 'You generate code documentation JSON.' },
        { role: 'user', content: prompt }
      ]
    });

    const raw = completion.choices[0].message.content.trim();
    // Strip code fences if present
    const jsonText = raw.replace(/^```(?:json)?|```$/g, '').trim();

    // Parse JSON5 for leniency
    const parsed = JSON5.parse(jsonText);

    // Trim solution code
    const key = Object.keys(parsed.files)[0];
    parsed.files[key] = parsed.files[key].trim();

    return { needsClarification: false, doc: parsed, meta, path: `codeforces/CF-${meta.contestId}-${slugify(meta.name)}` };
  } catch (err) {
    console.error(err);
    if (err.message.includes('clarification')) {
      return { needsClarification: true, question: err.message };
    }
    return { error: err.message || 'Unknown error occurred.' };
  }
}
