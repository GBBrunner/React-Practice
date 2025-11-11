import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext(null);

export default function AuthProvider({ children }) {
    // Track the current user; default to 'guest' when no user is set
    const [currentUser, setCurrentUser] = useState('guest');
    const navigate = useNavigate();

    // Keep existing flags for backward compatibility
    const [isAuthorized, setIsAuthorized] = useState(false);
    const [userRole, setUserRole] = useState("");

    const login = (role) => {
        setIsAuthorized(true);
        setUserRole(role || "");
        // When logging in, set a basic currentUser object; consumers can replace with richer data
        setCurrentUser({ role: role || 'user' });
    };

    const logout = () => {
        setIsAuthorized(false);
        setUserRole("");
        setCurrentUser('guest');
        navigate('/', { replace: true });
    };

    return (
        <AuthContext.Provider value={{ currentUser, setCurrentUser, isAuthorized, userRole, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}