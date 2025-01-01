import { Request, Response } from 'express';
import { getUserData, saveUserData, updateUserData } from '../services/githubService';

// Get user data by username
export const getUser = async (req: Request, res: Response) => {
  try {
    // Fetch user data from the GitHub API or the database
    const userData = await getUserData(req.params.username);
    
    if (!userData) {
      return res.status(404).json({ message: 'User not found' });
    }
    
    res.json(userData);
  } catch (error: any) {
    console.error('Error fetching user:', error);
    res.status(500).json({ message: 'An error occurred while fetching user data' });
  }
};

// Add new user
export const addUser = async (req: Request, res: Response) => {
  try {
    const savedUser = await saveUserData(req.body);  // Save user data
    res.status(201).json(savedUser);
  } catch (error: any) {
    console.error('Error adding user:', error);
    res.status(500).json({ message: 'An error occurred while adding user data' });
  }
};

// Update user data
export const updateUser = async (req: Request, res: Response) => {
  try {
    const updatedUser = await updateUserData(req.params.username, req.body);  // Update user data
    res.json(updatedUser);
  } catch (error: any) {
    console.error('Error updating user:', error);
    res.status(500).json({ message: 'An error occurred while updating user data' });
  }
};
