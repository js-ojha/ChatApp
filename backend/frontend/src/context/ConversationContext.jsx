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
    // eslint-disable-next-line
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
