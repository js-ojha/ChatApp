import React from "react";
import Search from "./Search";
import Users from "./Users";
import { useAuth } from "../../helper/hooks";

const Left = () => {
  const { meData } = useAuth();
  return (
    <div className="flex-1/4 bg-black text-white p-2">
      <div className="flex flex-row justify-between items-center">
        <h1 className="text-xl font-bold">Chats</h1>
        {meData?._id ? (
          <h3 className="text-base text-gray-400">Hi {meData?.name} 👋🏻</h3>
        ) : null}
      </div>
      <Search />
      <hr className="border-gray-700" />
      <Users />
    </div>
  );
};

export default Left;
