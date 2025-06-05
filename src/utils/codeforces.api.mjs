import axios from "axios";

export async function getCodeforecesMetadata(contestId, problemIndex) {
  console.log("generating meatadata ")
  try {
    const url = `https://codeforces.com/api/contest.standings`;
    const params = {
      contestId: contestId,
      from: 1,
      count: 1,
      showUnofficial: false
    };

    const response = await axios.get(url, { params });

    if (response.data.status !== 'OK') {
      console.error('API error:', response.data.comment);
      return null;
    }

    const problems = response.data.result.problems;

    const problem = problems.find(p => p.index === problemIndex);
    if (!problem) {
      console.error(`Problem ${problemIndex} not found in contest ${contestId}`);
      return null;
    }

    return problem;
  } catch (error) {
    console.error('Request failed:', error.message);
    return null;
  }
}