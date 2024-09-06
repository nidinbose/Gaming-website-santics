import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('token'); 

  if (!isAuthenticated) {
    alert("Please log in to continue.");
    return <Navigate to="/adminlogin" replace />;
  }

  return children;
};

export default ProtectedRoute;