import React from "react";
import { CiLogout } from "react-icons/ci";
import { useAuth } from "../../helper/hooks";
import Cookies from "js-cookie";
import { logoutApi } from "../../api/ApiCalls";
import toast from "react-hot-toast";

const Sidebar = () => {
  const { setMeData } = useAuth();
  const handleLogout = async () => {
    const response = await logoutApi();
    console.log("Logout Response", response);
    setMeData(null);
    localStorage.removeItem("user");
    Cookies.remove("authToken");
    toast.success("Logged out successfully");
  };

  return (
    <div className="flex flex-col gap-2 p-2 justify-end h-full">
      <CiLogout
        onClick={handleLogout}
        className="text-4xl cursor-pointer hover:bg-gray-700 duration-300 rounded-md p-2"
      />
    </div>
  );
};

export default Sidebar;
