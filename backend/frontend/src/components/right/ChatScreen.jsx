import React from "react";
import ChatHeader from "./ChatHeader";
import Messages from "./Messages";

const ChatScreen = () => {
  return (
    <div className="flex flex-col gap-2">
      <ChatHeader />
      <Messages />
    </div>
  );
};

export const NoChatScreen = () => {
  return (
    <div className="flex flex-col gap-2 justify-center items-center h-full">
      <div className="flex">
        <h1 className="text-base font-bold">
          Select a conversation to start chatting
        </h1>
      </div>
    </div>
  );
};

export default ChatScreen;
