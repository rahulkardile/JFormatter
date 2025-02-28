import express, { Request, Response, NextFunction } from 'express';
import { Server } from 'socket.io';
import helmet from 'helmet';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import { formatController } from './controllers/format';
import { validateController } from './controllers/validate';
import { convertController } from './controllers/convert';
import { setupCollaboration } from './controllers/collaboration';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(helmet());
app.use(cors({ origin: '*' }));
app.use(express.json());
app.use(
  rateLimit({
    windowMs: 1000, // 1 second
    max: 3, // 10 requests per second
    message: 'Too many requests, please try again later.',
  })
);

// Routes
app.post('/format', formatController);
app.post('/validate', validateController);
app.post('/convert', convertController);

// Error handling middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal server error' });
});

// Start server with Socket.IO
const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

const io = new Server(server, {
  cors: {
    origin: '*', // Allow all origins for development
  },
});

// Setup WebSocket collaboration
setupCollaboration(io);

export { io }; // Export for use in controllers