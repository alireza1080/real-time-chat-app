import { Server } from 'socket.io';
import { server } from '../app.js';

import { config } from 'dotenv';
config();

const clientUrl = process.env.CLIENT_URL;
console.log(clientUrl);

const io = new Server(server, {
  cors: {
    origin: clientUrl,
    credentials: true,
  },
});

io.on('connection', (socket) => {
  console.log('a user connected', socket.id);

  socket.on('disconnect', () => {
    console.log('a user disconnected', socket.id);
  });
});

export { io };
