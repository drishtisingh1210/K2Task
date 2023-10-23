// PrivateRoute component
import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
// import { Route, Navigate } from "react-router-dom";

const PrivateRoute = ({ element: Commponent }) => {
  const { isAuthenticated } = useSelector((state) => state.user);
  // const navigate = useNavigate();
  return isAuthenticated ? { Commponent } : <Navigate to="/login" />;
};

export default PrivateRoute;
