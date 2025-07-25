import app from './app.js';
import dotenv from 'dotenv';
import { connectToDatabase } from './services/database.service.js';

dotenv.config();

const PORT = process.env.PORT;

app.listen(PORT, async () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  await connectToDatabase();
});
