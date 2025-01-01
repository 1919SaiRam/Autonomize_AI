import express from 'express';
import userRoutes from './routes/userRoutes';

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Define routes
app.use('/api/users', userRoutes);

app.get('/', (req, res) => {
  res.send('Backend is working!');
});

export default app;
