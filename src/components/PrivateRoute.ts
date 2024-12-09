import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children, roleRequired }) => {
  const token = localStorage.getItem("authToken");

  if (!token) {
    return <Navigate to="/" />;
  }

  const payload = JSON.parse(atob(token.split(".")[1]));

  if (roleRequired && payload.role !== roleRequired) {
    return <Navigate to="/" />;
  }

  return children;
};

export default PrivateRoute;
