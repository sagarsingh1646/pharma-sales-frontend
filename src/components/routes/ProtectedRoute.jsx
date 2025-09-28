import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const { role } = useSelector((state) => state.auth);

  if (!role) {
    // If not logged in, redirect to login
    return <Navigate to="/login" replace />;
  }


  return children;
}
