import React from "react";
import ChatScreen, { NoChatScreen } from "./ChatScreen";
import { useConversation } from "../../helper/hooks";

const Right = () => {
  const { selectedConversation } = useConversation();
  return (
    <div className="flex-3/4 bg-slate-950 text-white">
      {selectedConversation ? <ChatScreen /> : <NoChatScreen />}
    </div>
  );
};

export default Right;
