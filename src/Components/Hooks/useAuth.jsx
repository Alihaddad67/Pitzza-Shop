// useAuth.jsx
import { useContext } from "react";
import { AuthContext } from "../Utils/AuthProvider.jsx";

export const useAuth = () => {
  const authContext = useContext(AuthContext);
  if (!authContext) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return authContext;
};
