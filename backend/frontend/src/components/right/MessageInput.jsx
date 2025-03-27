import React, { useState } from "react";
import { useConversation } from "../../helper/hooks";

const MessageInput = () => {
  const { sendMessage } = useConversation();
  const [message, setMessage] = useState("");

  const handleSendMessage = async (e) => {
    e.preventDefault();
    await sendMessage(message);
    setMessage("");
  };

  return (
    <div className="flex flex-1 items-center gap-3 p-2 rounded-lg">
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
        placeholder="Enter Message"
        className="grow outline-none bg-slate-900 text-base px-2 py-2 border border-gray-700 rounded-lg"
      />
      <button
        className="btn btn-primary"
        onClick={handleSendMessage}
        disabled={message.length === 0}
      >
        Send
      </button>
    </div>
  );
};

export default MessageInput;
