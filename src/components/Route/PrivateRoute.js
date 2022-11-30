import React from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../Firebaseinit";
import Loading from "../shere/Loading";
import { toast } from "react-toastify";

const PrivateRoute = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  let location = useLocation();
  const navigate = useNavigate();

  if (loading) {
    return <Loading />;
  }
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default PrivateRoute;
