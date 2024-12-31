import mysql from 'mysql2/promise';

export const connectToDatabase = async () => {
  const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password', // Change as needed
    database: 'github_data', // Create this database first
  });

  console.log('Connected to the database');
};
