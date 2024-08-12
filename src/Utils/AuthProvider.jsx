// AuthProvider.jsx
import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(() => JSON.parse(localStorage.getItem('user')));

  const login = async (data) => {
    localStorage.setItem('user', JSON.stringify(data));
    setUser(data);
    navigate("/home");
  };

  const logout = () => {
    localStorage.removeItem('user');
    setUser(null);
    navigate("/", { replace: true });
  };

  const value = {
    user,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
