import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";
import { getReceiverSocketId, socketEvents } from "../socket/server.js";
import { io } from "../socket/server.js";

export const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const { receiverId } = req.params;
    const senderId = req.user._id;

    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    });

    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, receiverId],
      });
    }

    const newMessage = await Message.create({
      message,
      senderId,
      receiverId,
    });

    if (newMessage) {
      conversation.messages.push(newMessage);
    }
    await Promise.all([conversation.save(), newMessage.save()]);

    const receiverSocketId = getReceiverSocketId(receiverId);
    if (receiverSocketId) {
      io.to(receiverSocketId).emit(socketEvents.newMessage, newMessage);
    }

    return res.status(200).json({
      message: "Message sent successfully",
      data: newMessage,
    });
  } catch (error) {
    console.log("Error sending message", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const getMessages = async (req, res) => {
  try {
    const { chatUserId } = req.params;
    const senderId = req.user._id;

    const conversation = await Conversation.findOne({
      participants: { $all: [senderId, chatUserId] },
    }).populate("messages");

    if (!conversation) {
      return res.status(200).json({ message: "No messages found", data: [] });
    }

    return res.status(200).json({
      message: "Messages fetched successfully",
      data: conversation.messages,
    });
  } catch (error) {
    console.log("Error getting messages", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
