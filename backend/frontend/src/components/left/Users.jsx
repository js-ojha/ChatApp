import React, { useEffect, useState } from "react";
import User from "./User";
import { getAllUsersApi } from "../../api/ApiCalls";
const Users = () => {
  const [usersData, setUsersData] = useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
      const response = await getAllUsersApi();
      setUsersData(response);
    };
    fetchUsers();
  }, []);
  return (
    <div className="flex flex-col gap-2 my-2 max-h-[calc(100vh-7rem)] overflow-y-auto">
      {usersData.map((user) => (
        <User key={user._id} user={user} />
      ))}
    </div>
  );
};

export default Users;
