import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const FollowersList = () => {
  const { username } = useParams();  // Extracts the GitHub username from the URL
  const [followers, setFollowers] = useState([]);

  useEffect(() => {
    const fetchFollowers = async () => {
      try {
        const response = await axios.get(`https://api.github.com/users/${username}/followers`);
        // Check if the response is an array before updating state
        if (Array.isArray(response.data)) {
          setFollowers(response.data);
        } else {
          setFollowers([]);  // Set to empty array if the response is not as expected
        }
      } catch (error) {
        console.error('Error fetching followers:', error);
        setFollowers([]);  // Set to empty array on error
      }
    };

    fetchFollowers();
  }, [username]);

  if (followers.length === 0) return <div>Loading followers...</div>;

  return (
    <div>
      <h2>{username}'s Followers</h2>
      <ul>
        {followers.map((follower) => (
          <li key={follower.id}>
            <a href={`/repository/${follower.login}`}>{follower.login}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FollowersList;
