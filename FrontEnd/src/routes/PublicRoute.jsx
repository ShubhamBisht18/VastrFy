import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function PublicRoute({ children }) {
  const { user, loading } = useAuth();

  if (loading) return <p>Loading...</p>;

  // If already logged in, redirect to Home
  if (user) return <Navigate to="/home" />;

  return children;
}
