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
      const socket = io("http://localhost:5002", {
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
    // eslint-disable-next-line
  }, [meData]);

  return (
    <SocketContext.Provider value={{ socket, onlineUsers }}>
      {children}
    </SocketContext.Provider>
  );
};

export default SocketSubscriber;
