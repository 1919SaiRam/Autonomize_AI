import express from 'express';
import userRoutes from './routes/userRoutes';

const app = express();

app.use(express.json());
app.use('/api/users', userRoutes);

app.get('/', (req, res) => {
  res.send('Backend is working');
});

export default app;
