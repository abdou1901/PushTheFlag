import openai from "../config/openai.mjs";
import slugify from "slugify";
import { OPENROUTE_MODEL } from "../utils/env.mjs";
import { getCodeforecesMetadata } from "../utils/codeforces.api.mjs";

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
    // sanitize and validate inputs
    url = sanitizePromptInput(url).trim();
    const id = isValidUrl(url);
    if (!id) throw new Error("Please enter a valid Codeforces URL (e.g. https://codeforces.com/problemset/problem/2114/F)");

    language = language.trim().toLowerCase();
    if (!isValidLanguage(language)) throw new Error("Please enter a valid language");

    code = sanitizePromptInput(code);
    if (!isValidCode(code)) throw new Error("Maximum code length is 50000 characters");

    // fetch metadata
    const meta = await getCodeforecesMetadata(id.contestId, id.problemIndex);

    // build extra instructions
    const extra = [];
    if (meta.rating >= 1800) extra.push('Explain technical details and tricky parts deeply.');
    else if (meta.rating >= 1100) extra.push('Provide balanced explanations with key insights.');
    else extra.push('Keep explanations clear and concise.');

    if (userPrefs.tone === 'beginner') extra.push('Use simple analogies and avoid jargon.');
    if (userPrefs.tone === 'advanced') extra.push('Include deeper insights and trade-offs.');
    if (userPrefs.tone === 'dev') extra.push('Be concise and code-focused, include relevant snippets.');

    // prompt for AI: only readme
    const prompt = `A user solved Codeforces problem "${meta.name}" (rating: ${meta.rating}).\n` +
                   `URL: ${url}\n\n` +
                   `Language: ${language}\n\n` +
                   `Here is their submitted solution:\n[[[BEGIN CODE]]]\n\`\`\`\n${code}\n\`\`\`\n[[[END CODE]]]\n\n` +
                   `Please generate a single README.md content in GitHub Markdown style that includes:\n` +
                   `1. Problem summary and input/output description\n` +
                   `2. Detailed approach and rationale\n` +
                   `3. Time and space complexity explained in plain terms\n` +
                   `4. Key test cases including edge cases\n` +
                   `5. Extra insights or gotchas\n` +
                   extra.map(x => `- ${x}`).join("\n") +
                   `\n\nReturn ONLY the raw Markdown for the README file. Do NOT include any JSON, code fences, or additional text.`;

    const completion = await openai.chat.completions.create({
      model: OPENROUTE_MODEL,
      messages: [
        { role: 'system', content: 'You generate a detailed README.md.' },
        { role: 'user', content: prompt }
      ]
    });

    const readme = completion.choices?.[0]?.message?.content;
    if (!readme) throw new Error('AI did not return README content.');

    // construct files object
    const solutionKey = `solution.${language}`;
    const doc = {
      files: {
        [solutionKey]: code.trim(),
        'README.md': readme.trim().replace(/\r?\n/g, '\\n')
      }
    };

    return {
      needsClarification: false,
      doc,
      meta,
      path: `codeforces/CF-${meta.contestId}-${slugify(meta.name)}`
    };
  } catch (err) {
    console.error(err);
    return { error: err.message || 'Unknown error occurred.' };
  }
}
