import express from "express";
import Message from "../models/message.model.js";
import Conversation from "../models/conversation.model.js";
import User from "../models/user.model.js";
import { getMessages, sendMessage } from "../controller/message.controller.js";
import { secureRoute } from "../middleware/secureRoute.js";

const router = express.Router();

router.post("/send/:receiverId", secureRoute, sendMessage);
router.get("/get/:chatUserId", secureRoute, getMessages);

export default router;
