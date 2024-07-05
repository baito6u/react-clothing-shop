import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import useAuthStatus from "./hooks/useAuth";

const PrivateRoute = () => {
  const { isAuthenticated } = useAuthStatus();
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

const PublicRoute = () => {
  const { isAuthenticated } = useAuthStatus();
  return !isAuthenticated ? <Outlet /> : <Navigate to="/dashboard" />;
};

export { PrivateRoute, PublicRoute };