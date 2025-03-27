import React, { useEffect, useMemo, useState } from "react";
import User from "./User";
import { getAllUsersApi } from "../../api/ApiCalls";
const Users = ({ search }) => {
  const [usersData, setUsersData] = useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
      const response = await getAllUsersApi();
      setUsersData(response);
    };
    fetchUsers();
  }, []);
  const filteredUsers = useMemo(() => {
    if (!search) return usersData;
    return usersData.filter((user) =>
      user.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [usersData, search]);

  return (
    <div className="flex flex-col gap-2 my-2 max-h-[calc(100vh-7rem)] overflow-y-auto">
      {filteredUsers.map((user) => (
        <User key={user._id} user={user} />
      ))}
    </div>
  );
};

export default Users;
