import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { ConversationContext } from "../context/ConversationContext";
import { SocketContext } from "../context/SocketContext";

export const useAuth = () => {
  const { meData, setMeData } = useContext(AuthContext);
  return { meData, setMeData };
};

export const useConversation = () => {
  const {
    selectedConversation,
    setSelectedConversation,
    messages,
    sendMessage,
  } = useContext(ConversationContext);
  return {
    selectedConversation,
    setSelectedConversation,
    messages,
    sendMessage,
  };
};

export const useSocket = () => {
  const { socket, onlineUsers } = useContext(SocketContext);
  return { socket, onlineUsers };
};
