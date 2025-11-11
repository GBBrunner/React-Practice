import useAuth from "../hooks/useAuth";

export default function LoginDisplay() {
    const { isAuthorized, login, logout, userRole } = useAuth();

    if (isAuthorized) {
        return (
            <div>
                <p>Welcome, {userRole}!</p>
                <button onClick={logout}>Logout</button>
            </div>
        );
    }
    return (
        <button onClick={() => login()}>Login</button>
    );
}