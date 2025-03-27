# Chat Application Documentation

## A Real-time Chat Application Built with MERN Stack

### Table of Contents

1. [Project Overview](#project-overview)
2. [System Architecture](#system-architecture)
3. [Technology Stack](#technology-stack)
4. [Installation Guide](#installation-guide)
5. [Project Structure](#project-structure)
6. [Backend Documentation](#backend-documentation)
   - [Server Setup](#server-setup)
   - [Database Models](#database-models)
   - [API Endpoints](#api-endpoints)
   - [Authentication](#authentication)
   - [WebSocket Implementation](#websocket-implementation)
7. [Frontend Documentation](#frontend-documentation)
   - [Application Structure](#application-structure)
   - [State Management](#state-management)
   - [Components](#components)
   - [Routing](#routing)
   - [API Integration](#api-integration)
8. [Features](#features)
9. [Security Implementation](#security-implementation)
10. [Deployment](#deployment)
11. [Testing](#testing)
12. [Future Improvements](#future-improvements)

## Project Overview

The Chat Application is a real-time messaging platform built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. This application represents a modern approach to real-time communication, leveraging the power of WebSocket technology for instant messaging capabilities. The application enables users to communicate in real-time with features like instant messaging, online status indicators, and user search functionality.

### Key Features

#### Real-time Messaging

- Instant message delivery using Socket.IO technology
- Real-time typing indicators
- Message read receipts
- Message delivery status
- Message history with pagination
- Message search functionality

#### User Authentication and Authorization

- Secure user registration and login
- JWT-based authentication
- Role-based access control
- Session management
- Password recovery system
- Email verification

#### Online/Offline Status

- Real-time online status updates
- Last seen timestamps
- Away/Do Not Disturb status
- Status message customization
- Status history tracking

#### User Search and Discovery

- Advanced user search functionality
- Search by name, email, or username
- Filter users by online status
- Recent contacts list
- Suggested contacts
- Block/Unblock users

#### Responsive Design

- Mobile-first approach
- Cross-browser compatibility
- Adaptive layouts
- Touch-friendly interface
- Dark/Light mode support
- Customizable themes

#### Message Management

- Message history preservation
- Message deletion
- Message editing
- Message forwarding
- Message pinning
- Message reactions

#### Security Features

- End-to-end encryption
- Secure data transmission
- XSS protection
- CSRF protection
- Rate limiting
- Input validation

## System Architecture

The application follows a modern client-server architecture with microservices principles. This architecture ensures scalability, maintainability, and high performance.

### Backend Architecture

#### Node.js Server

- Express.js framework implementation
- RESTful API design
- Middleware pipeline
- Error handling middleware
- Request validation
- Response formatting

#### MongoDB Database

- Document-based data storage
- Schema design
- Index optimization
- Query performance tuning
- Data validation
- Backup and recovery

#### Socket.IO Implementation

- WebSocket server setup
- Real-time event handling
- Connection management
- Room-based messaging
- Broadcasting capabilities
- Error recovery

#### Authentication System

- JWT token management
- Session handling
- Password hashing
- Token refresh mechanism
- Security headers
- Rate limiting

#### API Gateway

- Request routing
- Load balancing
- Request validation
- Response caching
- Error handling
- Logging system

### Frontend Architecture

#### React.js Implementation

- Component-based architecture
- Virtual DOM optimization
- State management
- Event handling
- Performance optimization
- Code splitting

#### State Management

- Context API implementation
- Custom hooks
- State persistence
- State synchronization
- Error boundaries
- Performance monitoring

#### Real-time Features

- Socket.IO client integration
- Event handling
- Connection management
- Reconnection logic
- Error handling
- State synchronization

#### Routing System

- Protected routes
- Route guards
- Navigation handling
- History management
- Route transitions
- Error boundaries

#### Styling System

- Tailwind CSS implementation
- Custom components
- Responsive design
- Theme management
- Animation system
- Accessibility features

## Technology Stack

### Backend Technologies

#### Core Technologies

- Node.js (v14 or higher)

  - Event-driven architecture
  - Non-blocking I/O
  - Package management
  - Module system
  - Error handling
  - Performance optimization

- Express.js

  - Middleware system
  - Routing system
  - Error handling
  - Request processing
  - Response formatting
  - Security features

- MongoDB
  - Document storage
  - Query optimization
  - Index management
  - Data validation
  - Aggregation pipeline
  - Replication

#### Additional Technologies

- Mongoose

  - Schema definition
  - Model creation
  - Query building
  - Validation
  - Middleware
  - Population

- Socket.IO

  - Real-time communication
  - Event handling
  - Room management
  - Broadcasting
  - Error handling
  - Scaling

- JWT

  - Token generation
  - Token validation
  - Token refresh
  - Security features
  - Error handling
  - Best practices

- bcrypt
  - Password hashing
  - Salt generation
  - Hash comparison
  - Security features
  - Performance optimization
  - Best practices

### Frontend Technologies

#### Core Technologies

- React.js

  - Component system
  - Hooks system
  - Virtual DOM
  - Event handling
  - Performance optimization
  - Error boundaries

- Vite

  - Build system
  - Development server
  - Hot module replacement
  - Asset handling
  - Plugin system
  - Optimization

- Socket.IO Client
  - Connection management
  - Event handling
  - Room management
  - Error handling
  - Reconnection logic
  - State management

#### UI Technologies

- Tailwind CSS

  - Utility-first approach
  - Custom components
  - Responsive design
  - Theme system
  - Animation
  - Accessibility

- DaisyUI
  - Component library
  - Theme system
  - Customization
  - Accessibility
  - Responsive design
  - Animation

#### Additional Technologies

- React Router DOM

  - Route management
  - Navigation
  - Route guards
  - History management
  - Transitions
  - Error handling

- React Hook Form

  - Form management
  - Validation
  - Error handling
  - Performance
  - Accessibility
  - Customization

- React Hot Toast

  - Notification system
  - Customization
  - Animation
  - Accessibility
  - Positioning
  - Styling

- Axios
  - HTTP client
  - Request/Response handling
  - Interceptors
  - Error handling
  - Request cancellation
  - Response transformation

## Installation Guide

### Prerequisites

#### System Requirements

- Node.js (v14 or higher)

  - Download and install from nodejs.org
  - Verify installation with `node --version`
  - Configure npm settings
  - Set up environment variables

- MongoDB

  - Download and install MongoDB Community Server
  - Set up MongoDB Compass (optional)
  - Configure MongoDB service
  - Set up authentication
  - Configure network access

- Development Tools
  - Git for version control
  - VS Code or preferred IDE
  - Postman for API testing
  - MongoDB Compass for database management
  - Chrome DevTools for frontend debugging

### Backend Setup

#### Repository Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/chatapp.git
   cd chatapp
   ```

2. Navigate to the backend directory:

   ```bash
   cd backend
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

#### Environment Configuration

1. Create a .env file:

   ```bash
   touch .env
   ```

2. Configure environment variables:

   ```
   PORT=5002
   MONGODB_PASSWORD=your_password
   MONDODB_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret
   NODE_ENV=development
   ```

3. Configure additional settings:
   ```
   CORS_ORIGIN=http://localhost:5173
   SOCKET_CORS_ORIGIN=http://localhost:5173
   COOKIE_SECRET=your_cookie_secret
   MAX_FILE_SIZE=5242880
   ALLOWED_FILE_TYPES=image/jpeg,image/png,image/gif
   ```

#### Database Setup

1. Create MongoDB database:

   ```bash
   mongosh
   use chatapp
   ```

2. Create database user:

   ```javascript
   db.createUser({
     user: "chatapp_user",
     pwd: "your_password",
     roles: [{ role: "readWrite", db: "chatapp" }],
   });
   ```

3. Configure database indexes:
   ```javascript
   db.users.createIndex({ email: 1 }, { unique: true });
   db.messages.createIndex({ conversationId: 1, createdAt: -1 });
   ```

#### Server Configuration

1. Start the development server:

   ```bash
   npm run dev
   ```

2. Verify server status:
   - Check console for successful connection
   - Verify MongoDB connection
   - Test API endpoints
   - Check WebSocket connection

### Frontend Setup

#### Project Setup

1. Navigate to the frontend directory:

   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

#### Environment Configuration

1. Create .env file:

   ```bash
   touch .env
   ```

2. Configure environment variables:
   ```
   VITE_API_URL=http://localhost:5002
   VITE_SOCKET_URL=http://localhost:5002
   VITE_APP_NAME=ChatApp
   ```

#### Development Server

1. Start the development server:

   ```bash
   npm run dev
   ```

2. Verify frontend setup:
   - Check console for errors
   - Test API connections
   - Verify WebSocket connection
   - Test responsive design

## Project Structure

### Backend Structure

#### Controller Layer

```
controller/
├── message.controller.js
│   ├── sendMessage
│   ├── getMessages
│   ├── deleteMessage
│   ├── editMessage
│   └── searchMessages
└── user.controller.js
    ├── registerUser
    ├── loginUser
    ├── logoutUser
    ├── getAllUsers
    └── updateUserProfile
```

#### Middleware Layer

```
middleware/
├── secureRoute.js
│   ├── token verification
│   ├── user authentication
│   └── error handling
└── errorHandler.js
    ├── error logging
    ├── error formatting
    └── error response
```

#### Model Layer

```
models/
├── conversation.model.js
│   ├── schema definition
│   ├── indexes
│   └── methods
├── message.model.js
│   ├── schema definition
│   ├── validation
│   └── methods
└── user.model.js
    ├── schema definition
    ├── password hashing
    └── methods
```

#### Route Layer

```
routes/
├── message.route.js
│   ├── message routes
│   ├── validation
│   └── middleware
└── user.route.js
    ├── user routes
    ├── validation
    └── middleware
```

#### Socket Layer

```
socket/
└── server.js
    ├── connection handling
    ├── event handling
    └── room management
```

### Frontend Structure

#### API Layer

```
api/
└── ApiCalls.js
    ├── authentication calls
    ├── message calls
    ├── user calls
    └── error handling
```

#### Asset Layer

```
assets/
├── sound.mp3
│   └── notification sound
└── react.svg
    └── application logo
```

#### Component Layer

```
components/
├── home/
│   └── Home.jsx
│       ├── layout structure
│       └── component composition
├── left/
│   ├── Left.jsx
│   ├── Search.jsx
│   └── Users.jsx
├── right/
│   ├── Right.jsx
│   ├── ChatScreen.jsx
│   └── MessageInput.jsx
├── login/
│   └── Login.jsx
├── signup/
│   └── SignUp.jsx
└── sidebar/
    └── Sidebar.jsx
```

#### Context Layer

```
context/
├── AuthContext.jsx
│   ├── authentication state
│   └── auth methods
├── ConversationContext.jsx
│   ├── conversation state
│   └── message methods
└── SocketContext.jsx
    ├── socket state
    └── socket methods
```

## Backend Documentation

### Server Setup

#### Express Application Configuration

```javascript
import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

// Middleware Configuration
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

// Route Configuration
app.use("/api/users", userRouter);
app.use("/api/messages", messageRouter);

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Something went wrong!" });
});
```

#### Database Connection

```javascript
try {
  await mongoose.connect(MONDODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("Connected to MongoDB");
} catch (error) {
  console.error("MongoDB connection error:", error);
  process.exit(1);
}
```

#### Socket.IO Integration

```javascript
import { Server } from "socket.io";
import http from "http";

const httpServer = http.createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: process.env.SOCKET_CORS_ORIGIN,
    methods: ["GET", "POST"],
  },
});

// Socket Event Handlers
io.on("connection", (socket) => {
  console.log("New socket connection:", socket.id);

  socket.on("join", (userId) => {
    socket.join(userId);
  });

  socket.on("message", (data) => {
    io.to(data.receiverId).emit("newMessage", data);
  });
});
```

### Database Models

#### User Model Implementation

```javascript
import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
      minlength: [3, "Name must be at least 3 characters"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, "Please enter a valid email"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [8, "Password must be at least 8 characters"],
    },
    status: {
      type: String,
      enum: ["online", "offline", "away"],
      default: "offline",
    },
    lastSeen: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

// Password Hashing Middleware
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

// Password Comparison Method
userSchema.methods.comparePassword = async function (candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

export default mongoose.model("User", userSchema);
```

#### Message Model Implementation

```javascript
import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
  {
    message: {
      type: String,
      required: [true, "Message is required"],
      maxlength: [500, "Message cannot exceed 500 characters"],
      trim: true,
    },
    senderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    receiverId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    read: {
      type: Boolean,
      default: false,
    },
    readAt: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

// Indexes for Performance
messageSchema.index({ senderId: 1, receiverId: 1, createdAt: -1 });
messageSchema.index({ read: 1 });

export default mongoose.model("Message", messageSchema);
```

#### Conversation Model Implementation

```javascript
import mongoose from "mongoose";

const conversationSchema = new mongoose.Schema(
  {
    participants: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },
    ],
    messages: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Message",
        default: [],
      },
    ],
    lastMessage: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Message",
    },
    unreadCount: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

// Indexes for Performance
conversationSchema.index({ participants: 1 });
conversationSchema.index({ lastMessage: -1 });

export default mongoose.model("Conversation", conversationSchema);
```

### API Endpoints

#### User Routes Implementation

```javascript
import express from "express";
import { secureRoute } from "../middleware/secureRoute.js";
import {
  registerUser,
  loginUser,
  logoutUser,
  getAllUsers,
  updateUserProfile,
} from "../controller/user.controller.js";

const router = express.Router();

// Public Routes
router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);

// Protected Routes
router.get("/getAllUsers", secureRoute, getAllUsers);
router.put("/profile", secureRoute, updateUserProfile);

export default router;
```

#### Message Routes Implementation

```javascript
import express from "express";
import { secureRoute } from "../middleware/secureRoute.js";
import {
  sendMessage,
  getMessages,
  deleteMessage,
  editMessage,
  searchMessages,
} from "../controller/message.controller.js";

const router = express.Router();

// All routes are protected
router.use(secureRoute);

router.post("/send/:receiverId", sendMessage);
router.get("/get/:chatUserId", getMessages);
router.delete("/:messageId", deleteMessage);
router.put("/:messageId", editMessage);
router.get("/search", searchMessages);

export default router;
```

### Authentication

#### JWT Implementation

```javascript
import jwt from "jsonwebtoken";

export const generateToken = async (res, userId) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });

  res.cookie("authToken", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
  });
};

export const verifyToken = (token) => {
  try {
    return jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    return null;
  }
};
```

#### Secure Route Middleware

```javascript
import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

export const secureRoute = async (req, res, next) => {
  try {
    const token = req.cookies.authToken;

    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const decoded = verifyToken(token);
    if (!decoded) {
      return res.status(401).json({ message: "Invalid token" });
    }

    const user = await User.findById(decoded.userId).select("-password");
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    req.user = user;
    next();
  } catch (error) {
    console.error("Secure route error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
```

### WebSocket Implementation

#### Socket Server Setup

```javascript
import { Server } from "socket.io";
import http from "http";

const httpServer = http.createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: process.env.SOCKET_CORS_ORIGIN,
    methods: ["GET", "POST"],
  },
});

const userSocketMap = new Map();

export const getReceiverSocketId = (receiverId) => {
  return userSocketMap.get(receiverId);
};

io.on("connection", (socket) => {
  console.log("New socket connection:", socket.id);

  const userId = socket.handshake.query.userId;
  if (userId) {
    userSocketMap.set(userId, socket.id);
    io.emit("onlineUsers", Array.from(userSocketMap.keys()));
  }

  socket.on("disconnect", () => {
    if (userId) {
      userSocketMap.delete(userId);
      io.emit("onlineUsers", Array.from(userSocketMap.keys()));
    }
  });

  socket.on("sendMessage", async (data) => {
    const receiverSocketId = getReceiverSocketId(data.receiverId);
    if (receiverSocketId) {
      io.to(receiverSocketId).emit("newMessage", data);
    }
  });
});
```

## Frontend Documentation

### Application Structure

#### Main Application Component

```javascript
import React from "react";
import AuthSubscriber from "./context/AuthContext";
import MainRoute from "./routes/MainRoute";
import ConversationSubscriber from "./context/ConversationContext";
import SocketSubscriber from "./context/SocketContext";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <AuthSubscriber>
      <SocketSubscriber>
        <ConversationSubscriber>
          <MainRoute />
          <Toaster />
        </ConversationSubscriber>
      </SocketSubscriber>
    </AuthSubscriber>
  );
};

export default App;
```

#### Routing Implementation

```javascript
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "../components/home/Home";
import Login from "../components/login/Login";
import SignUp from "../components/signup/SignUp";
import { useAuth } from "../helper/hooks";

const MainRoute = () => {
  const { meData } = useAuth();

  return (
    <Router>
      {meData?._id ? (
        <Routes>
          <Route path="/*" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/*" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      )}
    </Router>
  );
};

export default MainRoute;
```

### State Management

#### Authentication Context

```javascript
import React, { createContext, useState } from "react";
import Cookies from "js-cookie";

export const AuthContext = createContext();

const AuthSubscriber = ({ children }) => {
  const authToken = Cookies.get("authToken");
  const authUser = localStorage.getItem("user");

  const [meData, setMeData] = useState(authUser ? JSON.parse(authUser) : null);

  return (
    <AuthContext.Provider value={{ meData, setMeData }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthSubscriber;
```

#### Conversation Context

```javascript
import React, { createContext, useState, useEffect } from "react";
import { getMessagesApi, sendMessageApi } from "../api/ApiCalls";
import { useSocket } from "../helper/hooks";
import { socketEvents } from "./SocketContext";
import sound from "../assets/sound.mp3";

export const ConversationContext = createContext();

const ConversationSubscriber = ({ children }) => {
  const [selectedConversation, setSelectedConversation] = useState(null);
  const [messages, setMessages] = useState([]);
  const { socket } = useSocket();

  const getMessages = async () => {
    setMessages([]);
    const response = await getMessagesApi(selectedConversation._id);
    if (response?.data) {
      setMessages(response?.data);
    }
  };

  const sendMessage = async (message) => {
    const response = await sendMessageApi(selectedConversation._id, message);
    if (response?.data) {
      setMessages([...messages, response?.data]);
    }
  };

  useEffect(() => {
    if (selectedConversation?._id) {
      getMessages();
    }
  }, [selectedConversation]);

  useEffect(() => {
    if (socket) {
      socket.on(socketEvents.newMessage, (message) => {
        const audio = new Audio(sound);
        audio.play();
        setMessages((prevMsgs) => [...prevMsgs, message]);
      });
    }

    return () => {
      if (socket) {
        socket.off(socketEvents.newMessage);
      }
    };
  }, [socket]);

  return (
    <ConversationContext.Provider
      value={{
        selectedConversation,
        setSelectedConversation,
        messages,
        sendMessage,
      }}
    >
      {children}
    </ConversationContext.Provider>
  );
};

export default ConversationSubscriber;
```

#### Socket Context

```javascript
import { createContext, useEffect, useState } from "react";
import { io } from "socket.io-client";
import { useAuth } from "../helper/hooks";

export const SocketContext = createContext();

export const socketEvents = {
  connection: "connection",
  disconnect: "disconnect",
  sendMessage: "send-message",
  newMessage: "new-message",
  typing: "typing",
  onlineUsers: "online-users",
};

const SocketSubscriber = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const { meData } = useAuth();

  useEffect(() => {
    if (!meData) {
      if (socket) {
        socket.close();
        setOnlineUsers([]);
        setSocket(null);
      }
    } else {
      const socket = io("https://chatapp-5y51.onrender.com", {
        query: {
          userId: meData._id,
        },
      });
      setSocket(socket);

      socket.on(socketEvents.onlineUsers, (userIds) => {
        setOnlineUsers(userIds);
      });

      return () => {
        socket.close();
      };
    }
  }, [meData]);

  return (
    <SocketContext.Provider value={{ socket, onlineUsers }}>
      {children}
    </SocketContext.Provider>
  );
};

export default SocketSubscriber;
```

### Components

#### Home Component

```javascript
import React from "react";
import Sidebar from "../components/sidebar/Sidebar";
import Left from "../components/left/Left";
import Right from "../components/right/Right";

const Home = () => {
  return (
    <div className="flex flex-1 h-screen">
      <Sidebar />
      <Left />
      <Right />
    </div>
  );
};

export default Home;
```

#### Login Component

```javascript
import React from "react";
import { useForm } from "react-hook-form";
import { loginApi } from "../../api/ApiCalls";
import { Link } from "react-router-dom";
import { useAuth } from "../../helper/hooks";
import { toast } from "react-hot-toast";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { setMeData } = useAuth();

  const onSubmit = async (data) => {
    const response = await loginApi(data);
    if (response.user) {
      localStorage.setItem("user", JSON.stringify(response.user));
      setMeData(response.user);
      toast.success("Login successful");
    } else {
      toast.error("Invalid email or password");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex flex-col gap-3 justify-center border px-20 py-4 rounded-lg">
        <h1 className="text-2xl font-bold">Login</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <label className="input validator">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </g>
            </svg>
            <input
              type="email"
              placeholder="Enter email"
              {...register("email", {
                required: true,
                pattern: /^\S+@\S+$/i,
              })}
            />
          </label>
          {errors.email && (
            <span className="text-sm text-red-500">This field is required</span>
          )}

          <label className="input validator">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path>
                <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
              </g>
            </svg>
            <input
              type="password"
              placeholder="Password"
              {...register("password", {
                required: true,
                minLength: 8,
              })}
            />
          </label>
          {errors.password && (
            <span className="text-sm text-red-500">This field is required</span>
          )}
          <p className="text-sm text-gray-500">
            Don't have an account?{" "}
            <Link to="/signup" className="link link-primary">
              Sign Up
            </Link>
          </p>
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
```

## Features

### Real-time Messaging

#### Message Sending Implementation

```javascript
const sendMessage = async (message) => {
  try {
    const response = await sendMessageApi(selectedConversation._id, message);
    if (response?.data) {
      setMessages([...messages, response?.data]);
      socket.emit(socketEvents.sendMessage, {
        message: response.data,
        receiverId: selectedConversation._id,
      });
    }
  } catch (error) {
    console.error("Error sending message:", error);
    toast.error("Failed to send message");
  }
};
```

#### Message Receiving Implementation

```javascript
useEffect(() => {
  if (socket) {
    socket.on(socketEvents.newMessage, (message) => {
      const audio = new Audio(sound);
      audio.play();
      setMessages((prevMsgs) => [...prevMsgs, message]);
    });
  }

  return () => {
    if (socket) {
      socket.off(socketEvents.newMessage);
    }
  };
}, [socket]);
```

#### Typing Indicator Implementation

```javascript
const handleTyping = () => {
  socket.emit(socketEvents.typing, {
    receiverId: selectedConversation._id,
    isTyping: true,
  });

  setTimeout(() => {
    socket.emit(socketEvents.typing, {
      receiverId: selectedConversation._id,
      isTyping: false,
    });
  }, 1000);
};
```

### User Management

#### User Search Implementation

```javascript
const Users = ({ search }) => {
  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await getAllUsersApi();
      setUsersData(response);
    };
    fetchUsers();
  }, []);

  const filteredUsers = useMemo(() => {
    if (!search) return usersData;
    return usersData.filter((user) =>
      user.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [usersData, search]);

  return (
    <div className="flex flex-col gap-2 my-2 max-h-[calc(100vh-7rem)] overflow-y-auto">
      {filteredUsers.map((user) => (
        <User key={user._id} user={user} />
      ))}
    </div>
  );
};
```

#### Online Status Implementation

```javascript
const User = ({ user }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const { onlineUsers } = useSocket();
  const isOnline = onlineUsers.includes(user._id);

  return (
    <div
      className={`flex items-center gap-2 cursor-pointer hover:bg-gray-700 rounded-md p-2 duration-300 ${
        selectedConversation?._id === user._id && "bg-gray-700"
      }`}
      onClick={() => setSelectedConversation(user)}
    >
      <div className={`avatar ${isOnline ? "avatar-online" : ""}`}>
        <div className="w-13 rounded-full">
          <img src="https://robohash.org/mail@ashallendesign.co.uk" />
        </div>
      </div>
      <div>
        <h1 className="text-base font-bold">{user.name}</h1>
        <p className="text-sm text-gray-400">{user.email}</p>
      </div>
    </div>
  );
};
```

## Security Implementation

### Authentication Security

#### Password Hashing Implementation

```javascript
// User Model Password Hashing
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

// Password Comparison Method
userSchema.methods.comparePassword = async function (candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};
```

#### JWT Token Implementation

```javascript
export const generateToken = async (res, userId) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });

  res.cookie("authToken", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
  });
};
```

### API Security

#### Route Protection Implementation

```javascript
export const secureRoute = async (req, res, next) => {
  try {
    const token = req.cookies.authToken;

    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const decoded = verifyToken(token);
    if (!decoded) {
      return res.status(401).json({ message: "Invalid token" });
    }

    const user = await User.findById(decoded.userId).select("-password");
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    req.user = user;
    next();
  } catch (error) {
    console.error("Secure route error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
```

#### Rate Limiting Implementation

```javascript
import rateLimit from "express-rate-limit";

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
  message: "Too many requests from this IP, please try again later",
});

app.use("/api/", limiter);
```

## Deployment

### Backend Deployment

#### Environment Configuration

```javascript
// Production Environment Variables
PORT=5002
MONGODB_PASSWORD=your_production_password
MONDODB_URI=your_production_mongodb_uri
JWT_SECRET=your_production_jwt_secret
NODE_ENV=production
CORS_ORIGIN=https://your-frontend-domain.com
SOCKET_CORS_ORIGIN=https://your-frontend-domain.com
```

#### Server Configuration

```javascript
// Production Server Setup
if (process.env.NODE_ENV === "production") {
  const __dirname = path.resolve();
  app.use(express.static(path.join(__dirname, "frontend", "dist")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
  });
}
```

### Frontend Deployment

#### Build Configuration

```javascript
// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist",
    sourcemap: false,
    minify: "terser",
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom", "react-router-dom"],
          socket: ["socket.io-client"],
        },
      },
    },
  },
});
```

#### Deployment Steps

```bash
# Build the frontend
cd frontend
npm run build

# Deploy to production server
scp -r dist/* user@your-server:/path/to/static/files
```

## Testing

### Backend Testing

#### API Testing Implementation

```javascript
import request from "supertest";
import app from "../app";

describe("User API", () => {
  test("should register a new user", async () => {
    const response = await request(app).post("/api/users/register").send({
      name: "Test User",
      email: "test@example.com",
      password: "password123",
    });

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty("user");
  });

  test("should login user", async () => {
    const response = await request(app).post("/api/users/login").send({
      email: "test@example.com",
      password: "password123",
    });

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("user");
  });
});
```

#### Database Testing Implementation

```javascript
import mongoose from "mongoose";
import User from "../models/user.model";

describe("User Model", () => {
  beforeAll(async () => {
    await mongoose.connect(process.env.MONGODB_TEST_URI);
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });

  test("should create a new user", async () => {
    const user = await User.create({
      name: "Test User",
      email: "test@example.com",
      password: "password123",
    });

    expect(user).toHaveProperty("_id");
    expect(user.name).toBe("Test User");
  });
});
```

### Frontend Testing

#### Component Testing Implementation

```javascript
import { render, screen, fireEvent } from "@testing-library/react";
import Login from "../components/login/Login";

describe("Login Component", () => {
  test("should render login form", () => {
    render(<Login />);
    expect(screen.getByPlaceholderText("Enter email")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Password")).toBeInTheDocument();
  });

  test("should handle form submission", async () => {
    render(<Login />);

    fireEvent.change(screen.getByPlaceholderText("Enter email"), {
      target: { value: "test@example.com" },
    });

    fireEvent.change(screen.getByPlaceholderText("Password"), {
      target: { value: "password123" },
    });

    fireEvent.click(screen.getByText("Login"));

    // Add assertions for successful login
  });
});
```

## Future Improvements

### Planned Features

#### File Sharing Implementation

```javascript
// Backend Implementation
const uploadFile = async (req, res) => {
  try {
    const file = req.file;
    const fileUrl = await uploadToCloud(file);

    const message = await Message.create({
      senderId: req.user._id,
      receiverId: req.params.receiverId,
      message: fileUrl,
      type: "file",
    });

    res.status(200).json(message);
  } catch (error) {
    res.status(500).json({ message: "Error uploading file" });
  }
};

// Frontend Implementation
const handleFileUpload = async (file) => {
  const formData = new FormData();
  formData.append("file", file);

  const response = await axios.post(
    `/api/messages/upload/${selectedConversation._id}`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  if (response.data) {
    sendMessage(response.data.message);
  }
};
```

#### Group Chat Implementation

```javascript
// Group Model
const groupSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    members: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },
    ],
    admin: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    messages: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Message",
        default: [],
      },
    ],
  },
  {
    timestamps: true,
  }
);
```

### Technical Improvements

#### Performance Optimization

```javascript
// Code Splitting
const ChatScreen = React.lazy(() => import("./components/right/ChatScreen"));
const UserList = React.lazy(() => import("./components/left/UserList"));

// Caching Implementation
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      cacheTime: 30 * 60 * 1000, // 30 minutes
    },
  },
});
```

#### Security Enhancements

```javascript
// 2FA Implementation
const enable2FA = async (userId) => {
  const secret = speakeasy.generateSecret();
  const otpauthUrl = speakeasy.otpauthURL({
    secret: secret.base32,
    label: "ChatApp",
    issuer: "ChatApp",
    user: userId,
  });

  await User.findByIdAndUpdate(userId, {
    twoFactorSecret: secret.base32,
    twoFactorEnabled: true,
  });

  return otpauthUrl;
};

// End-to-end Encryption
const encryptMessage = (message, publicKey) => {
  return crypto.publicEncrypt(
    {
      key: publicKey,
      padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
    },
    Buffer.from(message)
  );
};
```

## Conclusion

The Chat Application represents a modern approach to real-time communication, leveraging the power of WebSocket technology and the MERN stack. The documentation provides a comprehensive guide to understanding and implementing the application's features, security measures, and future improvements.

### Key Takeaways

- MERN stack implementation
- Real-time communication
- Secure authentication
- Modern UI/UX
- Scalable architecture

### Next Steps

1. Implement planned features
2. Enhance security measures
3. Improve performance
4. Add testing coverage
5. Optimize deployment process
