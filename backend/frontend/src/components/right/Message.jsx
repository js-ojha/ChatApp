import React from "react";
import { useAuth } from "../../helper/hooks";

const Message = ({ message }) => {
  const { meData } = useAuth();

  const amISender = meData?._id === message?.senderId;
  const formmatedTime = new Date(message?.createdAt).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div>
      <div className={`chat ${amISender ? "chat-end" : "chat-start"}`}>
        <div
          className={`chat-bubble ${
            !amISender ? "chat-bubble-primary" : "chat-bubble-success"
          }`}
        >
          {message?.message || ""}
        </div>
        <div className="chat-footer opacity-50 text-xs">{formmatedTime}</div>
      </div>
    </div>
  );
};

export default Message;
