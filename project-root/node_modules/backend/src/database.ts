import { Pool } from 'pg';

// PostgreSQL connection pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'your-database-name',
  password: 'your-database-password',
  port: 5432,
});

// Initialize database connection
export const initializeDatabase = async () => {
  try {
    await pool.connect();
    console.log('Connected to the database!');
  } catch (error) {
    console.error('Error connecting to the database:', error);
  }
};

// Function to create the 'users' table if it does not exist
export const createUserTable = async () => {
  const query = `
    CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      username VARCHAR(255) UNIQUE NOT NULL,
      name VARCHAR(255),
      email VARCHAR(255),
      location VARCHAR(255),
      bio TEXT,
      blog VARCHAR(255),
      public_repos INT,
      followers INT,
      following INT,
      created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
    );
  `;
  
  try {
    const client = await pool.connect();
    await client.query(query);
    console.log('Table "users" created or already exists.');
    client.release();
  } catch (error) {
    console.error('Error creating table:', error);
  }
};

// Function to get user data by username
export const getUserData = async (username: string): Promise<any> => {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM users WHERE username = $1', [username]);
    client.release();
    return result.rows[0] ? result.rows[0] : null;  // Return first result if exists
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw error;
  }
};

// Export the pool only once
export { pool };
