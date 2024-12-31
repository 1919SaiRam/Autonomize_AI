import React, { useState } from 'react';
import axios from 'axios';

const UserForm = ({ setUserData }) => {
  const [username, setUsername] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get(`/api/users/${username}`);
      setUserData(res.data);  // Assuming the data returned is what you want to display
    } catch (err) {
      alert('User not found');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter GitHub username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default UserForm;
