import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RepositoryDetails from './pages/RepositoryDetails';
import FollowersList from './pages/FollowersList';
import UserForm from './components/UserForm';
import axios from 'axios';

const App = () => {
  const [userData, setUserData] = useState(null);

  // Fetch user data from backend when username is entered
  const fetchUserData = async (username) => {
    try {
      const response = await axios.get(`http://localhost:5000/api/users/${username}`);
      setUserData(response.data);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  return (
    <Router>
      <div>
        <UserForm fetchUserData={fetchUserData} />
        
        {userData && (
          <div>
            <h2>{userData.name}</h2>
            <p>{userData.bio}</p>
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
