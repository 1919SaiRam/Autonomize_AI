import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const RepositoryDetails = () => {
  const { repoName } = useParams();  // This gets the repo name from the URL
  const [repoDetails, setRepoDetails] = useState(null);

  useEffect(() => {
    const fetchRepoDetails = async () => {
      try {
        const response = await axios.get(`https://api.github.com/repos/${repoName}`);
        setRepoDetails(response.data);
      } catch (error) {
        console.error('Error fetching repository details:', error);
      }
    };

    fetchRepoDetails();
  }, [repoName]);

  if (!repoDetails) return <div>Loading...</div>;

  return (
    <div>
      <h2>{repoDetails.name}</h2>
      <p>{repoDetails.description}</p>
      <p>Created at: {new Date(repoDetails.created_at).toLocaleDateString()}</p>
      <p>Stars: {repoDetails.stargazers_count}</p>
      <p>Forks: {repoDetails.forks_count}</p>
      <p>Language: {repoDetails.language}</p>
    </div>
  );
};

export default RepositoryDetails;
