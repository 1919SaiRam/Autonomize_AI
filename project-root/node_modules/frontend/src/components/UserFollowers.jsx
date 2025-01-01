import React from 'react';

const UserFollowers = ({ followers }) => {
  // Ensure followers is always an array
  if (!Array.isArray(followers)) return null;

  return (
    <div>
      <h2>Followers</h2>
      <ul>
        {followers.map((follower) => (
          <li key={follower.id}>
            <a href={follower.html_url} target="_blank" rel="noopener noreferrer">
              {follower.login}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserFollowers;
