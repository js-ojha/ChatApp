import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRouter from "./routes/user.route.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import messageRouter from "./routes/message.route.js";
import { app, httpServer, io } from "./socket/server.js";
import path from "path";

dotenv.config();
const PORT = process.env.PORT || 5004;
const MONDODB_URI = process.env.MONDODB_URI;

try {
  await mongoose.connect(MONDODB_URI);
  console.log("Connected to MongoDB");
} catch (error) {
  console.log("Error connecting to MongoDB", error);
}

app.use(express.json());
app.use(cookieParser());
app.use(cors()); // Allow all origins
app.use("/api/users", userRouter);
app.use("/api/messages", messageRouter);

httpServer
  .listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
  })
  .on("error", (error) => {
    console.log("Error listening to port", error);
  });

// Code for deployment
if (process.env.NODE_ENV === "production") {
  const __dirname = path.resolve();
  app.use(express.static(path.join(__dirname, "frontend", "dist")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
  });
}
