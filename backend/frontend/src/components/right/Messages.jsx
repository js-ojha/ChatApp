import React, { useEffect, useRef } from "react";
import Message from "./Message";
import MessageInput from "./MessageInput";
import { useConversation } from "../../helper/hooks";

const Messages = () => {
  const { messages } = useConversation();
  const messagesContainerRef = useRef(null);

  const scrollToBottom = () => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop =
        messagesContainerRef.current.scrollHeight;
    }
  };

  // Scroll to bottom on initial render and when messages change
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="flex flex-col gap-2 justify-between">
      <div
        ref={messagesContainerRef}
        className="flex flex-col gap-2 px-2 overflow-y-auto min-h-[calc(100vh-9rem)] max-h-[calc(100vh-9rem)]"
      >
        {messages.length > 0 ? (
          messages.map((message) => (
            <Message key={message._id} message={message} />
          ))
        ) : (
          <NoMessage />
        )}
      </div>
      <MessageInput />
    </div>
  );
};

const NoMessage = () => {
  return (
    <div className="flex flex-1 flex-col gap-2 justify-center items-center">
      <h1 className="text-base font-bold">No messages yet</h1>
      <p className="text-sm text-gray-400">
        Send a message to your friend to start chatting
      </p>
    </div>
  );
};

export default Messages;
