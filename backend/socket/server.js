import { Server } from "socket.io";
import http from "http";
import express from "express";

export const socketEvents = {
  connection: "connection",
  disconnect: "disconnect",
  sendMessage: "send-message",
  newMessage: "new-message",
  typing: "typing",
  onlineUsers: "online-users",
};

const app = express();
const httpServer = http.createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
  },
});
const userSocketMap = {};

export const getReceiverSocketId = (receiverId) => {
  return userSocketMap[receiverId];
};

io.on(socketEvents.connection, (socket) => {
  console.log("New socket connection", socket.id);

  const userId = socket.handshake.query.userId;
  if (userId) {
    userSocketMap[userId] = socket.id;
    console.log("socket connected with users", userSocketMap);
  }

  io.emit(socketEvents.onlineUsers, Object.keys(userSocketMap));

  socket.on(socketEvents.disconnect, () => {
    console.log("Socket disconnected", socket.id);
    if (userId) {
      delete userSocketMap[userId];
      io.emit(socketEvents.onlineUsers, Object.keys(userSocketMap));
    }
  });
});

export { app, httpServer, io };
