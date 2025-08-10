import { Server } from 'socket.io';
import { createServer } from 'http';
import express from 'express';

import { config } from 'dotenv';
config();

const app = express();

const server = createServer(app);

const io = new Server(server, {
  cors: {
    origin: process.env.CLIENT_URL,
    credentials: true,
  },
});

io.on('connection', (socket) => {
  console.log('a user connected', socket.id);

  socket.on('disconnect', () => {
    console.log('a user disconnected', socket.id);
  });
});

export { io, server, app };
