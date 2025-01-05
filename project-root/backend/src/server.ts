import express from 'express';
import { initializeDatabase, createUserTable } from './database';

const app = express();

// Initialize database connection and create table if it doesn't exist
initializeDatabase();
createUserTable();

// other Express routes and middlewares...

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
