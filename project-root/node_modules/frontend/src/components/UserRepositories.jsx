import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserRepositories = ({ username }) => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRepositories = async () => {
      try {
        const response = await axios.get(`https://api.github.com/users/${username}/repos`);
        setRepos(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching repositories:', error);
      }
    };

    fetchRepositories();
  }, [username]);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h2>{username}'s Repositories</h2>
      <ul>
        {repos.map((repo) => (
          <li key={repo.id} style={{ marginBottom: '15px' }}>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer" style={{ fontWeight: 'bold' }}>
              {repo.name}
            </a>
            <p>{repo.description}</p>
            <p>⭐ {repo.stargazers_count} | 🍴 {repo.forks_count} | {repo.language}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserRepositories;
