 const http = require('http');
const socketio = require('socket.io');
const app = require('./app');
const connectDB = require('./config/db');

// Connect to MongoDB
connectDB();

// Create server
const server = http.createServer(app);
const io = socketio(server);

// Socket.io setup
io.on('connection', (socket) => {
  console.log('New client connected');

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
