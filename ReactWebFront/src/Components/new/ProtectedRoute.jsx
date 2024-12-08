import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from "./AuthContext";  // Import the useAuth hook

const ProtectedRoute = ({ children }) => {
  const { isLoggedIn } = useAuth();  // Access login state

  // If the user is not logged in, redirect them to the login page
  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  // If logged in, render the admin panel
  return children;
};

export default ProtectedRoute;
