// PrivateRoute component
import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
// import { Route, Navigate } from "react-router-dom";

const PrivateRoute = ({ element: Component }) => {
  const { isAuthenticated } = useSelector((state) => state.user);
  // const navigate = useNavigate();
  return isAuthenticated ? <Component /> : <Navigate to="/login" />;
};

export default PrivateRoute;
