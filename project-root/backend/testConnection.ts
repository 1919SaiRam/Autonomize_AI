import { Pool } from 'pg';

// PostgreSQL connection pool
const pool = new Pool({
  user: 'your-database-user',
  host: 'localhost',
  database: 'your-database-name',
  password: 'your-database-password',
  port: 5432,
});

// Function to test database connection
const testConnection = async () => {
  try {
    const client = await pool.connect();
    console.log('Connected to the database!');
    client.release();
  } catch (error) {
    console.error('Database connection error:', error);
  }
};

testConnection();
