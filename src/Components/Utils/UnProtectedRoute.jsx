import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../Hooks/useAuth";

export const UnProtectedRoute = ({ children }) => {
    const { user } = useAuth();

    if (user) {
        return <Navigate to="/home" replace />;
    }
    return children;
};
