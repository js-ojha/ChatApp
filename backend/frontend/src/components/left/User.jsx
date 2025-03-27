import React from "react";
import { useConversation, useSocket } from "../../helper/hooks";

const User = ({ user }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const { onlineUsers } = useSocket();
  const isOnline = onlineUsers.includes(user._id);
  return (
    <div
      className={`flex items-center gap-2 cursor-pointer hover:bg-gray-700 rounded-md p-2 duration-300 ${
        selectedConversation?._id === user._id && "bg-gray-700"
      }`}
      onClick={() => setSelectedConversation(user)}
    >
      <div className={`avatar ${isOnline ? "avatar-online" : ""}`}>
        <div className="w-13 rounded-full">
          <img src="https://robohash.org/mail@ashallendesign.co.uk" />
        </div>
      </div>
      <div>
        <h1 className="text-base font-bold">{user.name}</h1>
        <p className="text-sm text-gray-400">{user.email}</p>
      </div>
    </div>
  );
};

export default User;
