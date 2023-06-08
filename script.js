

const axios = require('axios');

const getCommits = async () => {
  const owner = 'mihir952';
  const repo = 'YOUR_REPO';
  const accessToken = 'YOUR_ACCESS_TOKEN';

  const apiUrl = `https://api.github.com/repos/${owner}/${repo}/commits`;

  try {
    const response = await axios.get(apiUrl, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'User-Agent': 'GitHub API Client'
      }
    });

    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};

// Call the function to get commits
getCommits();

