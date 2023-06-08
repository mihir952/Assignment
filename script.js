const axios = require('axios');

async function getAllCommitStatuses(owner, repo, ref, accessToken) {
  const apiUrl = `https://api.github.com/repos/${owner}/${repo}/commits/${ref}/statuses`;

  try {
    const response = await axios.get(apiUrl, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    });

    return response.data;
  } catch (error) {
    console.error(error);
  }
}

// Usage example
const owner = 'mihir952';
const repo = 'Assignment';
const ref = 'main'; // Branch or commit SHA
const accessToken = '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';

getAllCommitStatuses(owner, repo, ref, accessToken)
  .then((commitStatuses) => {
    console.log(commitStatuses);
  })
  .catch((error) => {
    console.error(error);
  });
