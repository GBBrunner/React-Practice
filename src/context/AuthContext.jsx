import { createContext, useState } from "react";

export const AuthContext = createContext(null);

export default function AuthProvider({ children }) {
    const [isAuthorized, setIsAuthorized] = useState(false);
    const [userRole, setUserRole] = useState("");
    const login = (role) => {
        setIsAuthorized(true);
        setUserRole(role || "");
    };
    const logout = () => {
        setIsAuthorized(false);
        setUserRole("");
    };

    return (
        <AuthContext.Provider value={{ isAuthorized, userRole, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}