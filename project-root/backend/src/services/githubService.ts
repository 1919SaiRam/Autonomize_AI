import axios from 'axios';
import { User } from '../models/User';

// Fetch user data from GitHub API
export const getUserData = async (username: string): Promise<User> => {
  const response = await axios.get(`https://api.github.com/users/${username}`);
  return response.data;
};

// Save user data to database (pseudo code, implement actual DB save logic)
export const saveUserData = async (user: User): Promise<User> => {
  // Implement saving logic (e.g., MySQL)
  return user;
};

// Update user data (pseudo code)
export const updateUserData = async (username: string, updatedData: Partial<User>): Promise<User> => {
  // Implement update logic
  return { ...updatedData, username };
};
