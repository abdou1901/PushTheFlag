import fetch from 'node-fetch';

export async function getLeetcodeMetadata(problemUrl) {
  const match = problemUrl.match(/leetcode\.com\/problems\/([^\/]+)/);
  if (!match) {
    throw new Error(`Invalid LeetCode URL: ${problemUrl}`);
  }
  const slug = match[1];
  const query = `
    query getQuestionDetail($titleSlug: String!) {
      question(titleSlug: $titleSlug) {
        questionFrontendId
        title
        difficulty
        topicTags {
          name
          slug
        }
      }
    }
  `;
  const variables = { titleSlug: slug };
  const res = await fetch('https://leetcode.com/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query, variables }),
  });

  if (!res.ok) {
    throw new Error(`LeetCode API error: ${res.status} ${res.statusText}`);
  }

  const { data, errors } = await res.json();
  if (errors?.length) {
    throw new Error(`GraphQL errors: ${JSON.stringify(errors)}`);
  }

  const q = data.question;
  if (!q) {
    throw new Error(`No question found for slug: ${slug}`);
  }

  return {
    id: q.questionFrontendId,
    title: q.title,   
    difficulty: q.difficulty.toLowerCase(),
    tags: q.topicTags.map(t => t.name.toLowerCase()), 
  };
}
