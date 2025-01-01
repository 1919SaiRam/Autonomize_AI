import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RepositoryDetails from './pages/RepositoryDetails';
import FollowersList from './pages/FollowersList';
import UserForm from './components/UserForm';
import axios from 'axios';

const App = () => {
  const [userData, setUserData] = useState(null);

  // Fetch user data from GitHub API
  const fetchUserData = async (username) => {
    try {
      const response = await axios.get(`https://api.github.com/users/${username}`);
      setUserData(response.data);  // Setting user data
    } catch (error) {
      console.error('Error fetching user data:', error);
      alert('User not found');
    }
  };

  return (
    <Router>
      <div className="app-container">
        <UserForm fetchUserData={fetchUserData} />

        {userData && (
          <div className="user-profile">
            <h2>{userData.name}</h2>
            <p>{userData.bio}</p>
            <p>Followers: <strong>{userData.followers}</strong></p>
            <p>Repositories: <strong>{userData.public_repos}</strong></p>
          </div>
        )}

        <Routes>
          <Route path="/repository/:repoName" element={<RepositoryDetails />} />
          <Route path="/followers/:username" element={<FollowersList />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
