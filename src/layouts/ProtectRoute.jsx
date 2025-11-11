import { Outlet } from "react-router";
// import {useAuth} from "../hooks/useAuth.jsx";

export default function ProtectRoute() {
    // const { isAuthenticated } = useAuth();
    const { isAuthenticated } = false;
    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }
  return <Outlet />;
}
