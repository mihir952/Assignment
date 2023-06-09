async function getAllCommitStatuses(owner, repo, ref, accessToken) {
  const apiUrl = `https://api.github.com/repos/${owner}/${repo}/commits`;

  try {
    const response = await axios.get(apiUrl, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error(error);
  }
}

const owner = "mihir952";
const repo = "Assignment";
const ref = "master";
const accessToken = "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";

const commitTableBody = document.getElementById("TableBody");

getAllCommitStatuses(owner, repo, ref, accessToken)
  .then((commitStatuses) => {
    commitStatuses.forEach((status) => {
      console.log(status.commit);
      const author = status.commit.author.name;
      const message = status.commit.message;
      const time = status.commit.author.date;

      const row = document.createElement("tr");
      const Message = document.createElement("td");
      const Author = document.createElement("td");
      const Date = document.createElement("td");

      Author.textContent = author;
      Message.textContent = message;
      Date.textContent = time;

      row.appendChild(Message);
      row.appendChild(Author);
      row.appendChild(Date);

      commitTableBody.appendChild(row);
    });
  })
  .catch((error) => {
    console.error("Error:", error.message);
    console.error("Response:", error.response.data);
  });
