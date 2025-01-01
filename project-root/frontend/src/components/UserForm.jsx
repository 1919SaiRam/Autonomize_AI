import React, { useState } from 'react';

const UserForm = ({ fetchUserData }) => {
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username) {
      setError('Please enter a GitHub username');
      return;
    }
    setError('');
    try {
      await fetchUserData(username);
    } catch (err) {
      setError('User not found');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1> Automize-AI Frontend - Backend GitHub Fetch.....</h1>
      <div className="search-container">
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit">Search</button>
      </div>
      {error && <p className="error-message">{error}</p>}
    </form>
  );
};

export default UserForm;
