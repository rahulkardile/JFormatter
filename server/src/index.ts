import express, { Request, Response, NextFunction } from 'express';
import { Server } from 'socket.io';
import helmet from 'helmet';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import rateLimit from 'express-rate-limit';
import authRoutes from './routes/user.routes'
import connectDB from "./config/db"

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(helmet());
app.use(cookieParser());
app.use(cors({ origin: '*' }));
app.use(express.json());
app.use(
  rateLimit({
    windowMs: 1000, // 1 second
    max: 3, // 10 requests per second
    message: 'Too many requests, please try again later.',
  })
);

// routes
app.use('/api/auth', authRoutes);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal server error' });
});

const server = app.listen(PORT, () => {
  connectDB();
  console.log(`Server running on port ${PORT}`);
});

const io = new Server(server, {
  cors: {
    origin: '*',
  },
});


export { io, app }