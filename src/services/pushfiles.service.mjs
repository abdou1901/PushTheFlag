import axios from "axios"
async function getFileSHAIfExists(owner, repo, filePath,token) {
  try {
    const res = await axios.get(`https://api.github.com/repos/${owner}/${repo}/contents/${filePath}`, {
      headers: {
        Authorization: `token ${token}`
      }
    });
    return res.data.sha;
  } catch (err) {
    if (err.response && err.response.status === 404) return null;
    throw err;
  }
}

export async function pushFileToGitHub(owner, repo, branch, filePath, content, token,res) {
  const sha = await getFileSHAIfExists(owner, repo, filePath,token);
  const encodedContent = Buffer.from(content).toString('base64');

  const url = `https://api.github.com/repos/${owner}/${repo}/contents/${filePath}`;
  const payload = {
    message: `Add/update ${filePath}`,
    content: encodedContent,
    branch,
    ...(sha && { sha }),
  };

  try {
    const result = await axios.put(url, payload, {
      headers: {
        Authorization: `token ${token}`,
        'Content-Type': 'application/json',
        'User-Agent': 'node.js script',
      },
    });

    console.log('✅ File pushed to GitHub:', result.data.content.path);
  } catch (err) {
    console.error('❌ Error pushing file:', err.response?.data || err.message);
    return res.json({pushed:false,message:"failed to push the file"})
  }
}