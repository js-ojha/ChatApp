import React, { createContext, useState } from "react";
import Cookies from "js-cookie";

export const AuthContext = createContext();

const AuthSubscriber = ({ children }) => {
  const authToken = Cookies.get("authToken");
  const authUser = localStorage.getItem("user");

  const [meData, setMeData] = useState(authUser ? JSON.parse(authUser) : null);

  return (
    <AuthContext.Provider value={{ meData, setMeData }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthSubscriber;
