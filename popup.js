document.addEventListener('DOMContentLoaded', function() {
  const fetchBtn = document.getElementById('fetchBtn');
  fetchBtn.addEventListener('click', async function() {
    const owner = document.getElementById('owner').value.trim();
    const repo = document.getElementById('repo').value.trim();

    if (!owner || !repo) {
      alert('Please provide both owner and repository name.');
      return;
    }

    try {
      const response = await fetch(`https://api.github.com/repos/${owner}/${repo}`);
      const data = await response.json();
      displayRepoInfo(data);
    } catch (error) {
      console.error('Error fetching repository information:', error);
      alert('Error fetching repository information. Please try again later.');
    }
  });
});

function displayRepoInfo(data) {
  const repoInfoDiv = document.getElementById('repoInfo');
  repoInfoDiv.innerHTML = `
    <h2>${data.full_name}</h2>
    <p>Description: ${data.description}</p>
    <p>Language: ${data.language}</p>
    <p>Stars: ${data.stargazers_count}</p>
    <p>Forks: ${data.forks_count}</p>
  `;
}
