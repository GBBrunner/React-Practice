import { Outlet ,Navigate} from "react-router";
import useAuth from "../hooks/useAuth.js";

// import {useAuth} from "../hooks/useAuth.jsx";

export default function ProtectRoute(roles) {
  const { isAuthorized, userRole } = useAuth();
  if (!isAuthorized) {
    return <Navigate to="/login"/>;
  }
  if (userRole && !roles.includes(userRole)){
    return <Navigate to="/unauthorized"/>;
  }
  return <Outlet />;
}
