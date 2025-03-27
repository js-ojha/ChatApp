import React from "react";
import Sidebar from "../sidebar/Sidebar";
import Left from "../left/Left";
import Right from "../right/Right";

const Home = () => {
  return (
    <div className="flex flex-1 h-screen">
      <Sidebar />
      <Left />
      <Right />
    </div>
  );
};

export default Home;
