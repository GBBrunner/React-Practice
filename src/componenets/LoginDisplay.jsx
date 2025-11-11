import useAuth from "../hooks/useAuth";

export default function LoginDisplay() {
    const { isAuthorized, login, logout, userRole } = useAuth();

    if (isAuthorized) {
        return (
            <div>
                <p>Welcome, {userRole}!</p>
            </div>
        );
    }
    return (
        <button onClick={() => login()}>Login</button>
    );
}