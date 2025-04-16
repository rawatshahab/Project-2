import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import reviewRoutes from './routes/reviewRoutes';
import { connectDB } from './config/db';

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', reviewRoutes);

export default app;
