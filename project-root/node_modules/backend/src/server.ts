import app from './app';
import { connectToDatabase } from './database';

const port = 5000;

connectToDatabase().then(() => {
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
});
