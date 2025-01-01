import { pool } from '../database';  // Importing the pool from database.ts
import { User } from '../models/User';

// Function to get user data from the database by username
export const getUserData = async (username: string): Promise<User | null> => {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM users WHERE username = $1', [username]);
    client.release();

    return result.rows[0] ? result.rows[0] : null;  // Return user if found, otherwise null
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw new Error('An error occurred while fetching user data');
  }
};

// Function to save user data into the database
export const saveUserData = async (user: User): Promise<User> => {
  try {
    const client = await pool.connect();
    const result = await client.query(
      'INSERT INTO users (username, name, email) VALUES ($1, $2, $3) RETURNING *',
      [user.username, user.name, user.email]
    );
    client.release();

    return result.rows[0];  // Return saved user data
  } catch (error) {
    console.error('Error saving user data:', error);
    throw new Error('An error occurred while saving user data');
  }
};

// Function to update user data in the database
export const updateUserData = async (username: string, updatedData: Partial<User>): Promise<User> => {
  try {
    const client = await pool.connect();
    
    const fields: string[] = [];
    const values: (string | number)[] = [];
    let query = 'UPDATE users SET';

    // Dynamically build the query
    Object.keys(updatedData).forEach((key, index) => {
      // Make sure the key is of type keyof User
      const typedKey = key as keyof User;

      // Ensure we don't add undefined values in the query
      if (updatedData[typedKey] !== undefined) {
        fields.push(`${typedKey} = $${index + 1}`);
        values.push(updatedData[typedKey]);
      }
    });

    if (fields.length === 0) {
      throw new Error('No valid fields to update');
    }

    query += ' ' + fields.join(', ') + ' WHERE username = $' + (fields.length + 1);
    values.push(username);

    const result = await client.query(query, values);
    client.release();

    if (result.rowCount === 0) {
      throw new Error('User not found');
    }

    return { username, ...updatedData };  // Return updated user data
  } catch (error) {
    console.error('Error updating user data:', error);
    throw new Error('An error occurred while updating user data');
  }
};
