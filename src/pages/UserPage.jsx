import useAuth from "../hooks/useAuth";
import { Navigate } from "react-router";    

export default function UserPage() {
    const { logout } = useAuth();
    return (
        <div>
            <h1>User Page</h1>
            <button className="bg-amber-800" onClick={logout}>Logout</button>
        </div>
    );
}