import React from "react";
import { useConversation, useSocket } from "../../helper/hooks";

const ChatHeader = () => {
  const { selectedConversation } = useConversation();
  const { onlineUsers } = useSocket();
  const isOnline = onlineUsers.includes(selectedConversation?._id);

  return (
    <div className="flex items-center gap-2 p-2 bg-slate-900">
      <div className={`avatar ${isOnline ? "avatar-online" : ""}`}>
        <div className="w-12 rounded-full">
          <img src="https://robohash.org/mail@ashallendesign.co.uk" />
        </div>
      </div>

      <div>
        <h1 className="text-base font-bold">{selectedConversation?.name}</h1>
        <p className="text-sm text-gray-400">
          {isOnline ? "Online" : "Offline"}
        </p>
      </div>
    </div>
  );
};

export default ChatHeader;
