import { Request, Response } from 'express';
import { getUserData, saveUserData, updateUserData } from '../services/githubService';

// Get user data
export const getUser = async (req: Request, res: Response) => {
  try {
    const userData = await getUserData(req.params.username);
    res.json(userData);
  } catch (error: unknown) {
    if (error instanceof Error) {
      // Handle error if it's an instance of Error
      res.status(500).json({ message: error.message });
    } else {
      // Handle unknown errors (non-Error types)
      res.status(500).json({ message: 'An unknown error occurred' });
    }
  }
};

// Add user data
export const addUser = async (req: Request, res: Response) => {
  try {
    const savedUser = await saveUserData(req.body);
    res.json(savedUser);
  } catch (error: unknown) {
    if (error instanceof Error) {
      // Handle error if it's an instance of Error
      res.status(500).json({ message: error.message });
    } else {
      // Handle unknown errors (non-Error types)
      res.status(500).json({ message: 'An unknown error occurred' });
    }
  }
};

// Update user data
export const updateUser = async (req: Request, res: Response) => {
  try {
    const updatedUser = await updateUserData(req.params.username, req.body);
    res.json(updatedUser);
  } catch (error: unknown) {
    if (error instanceof Error) {
      // Handle error if it's an instance of Error
      res.status(500).json({ message: error.message });
    } else {
      // Handle unknown errors (non-Error types)
      res.status(500).json({ message: 'An unknown error occurred' });
    }
  }
};
