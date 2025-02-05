import React, { useEffect } from "react";
import { useAuthContext } from "../context/FakeAuthContext";
import { useNavigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const { isAuthorized } = useAuthContext();
  const navigate = useNavigate();
  useEffect(() => {
    if (!isAuthorized) {
      navigate("/", { replace: true });
    }
  }, [isAuthorized, navigate]);
  return children;
}
