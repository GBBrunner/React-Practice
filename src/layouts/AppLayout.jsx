import { Outlet, NavLink } from "react-router"
import LoginDisplay from "../componenets/LoginDisplay.jsx";

export default function AppLayout() {
    return (
        <div className="flex flex-col h-screen">
            <header>
                <div>My Application</div>
                <div>
                    <button>Dashboard</button>
                    <button>Admin</button>
                    <LoginDisplay />   
                </div>
            </header>
            <nav className="flex flex-col bg-gray-200 p-4">
                <NavLink to="/dashboard">Dashboard</NavLink>
                <NavLink to="/admin">Admin</NavLink>
                <NavLink to="/login">Logout</NavLink>

            </nav>
            <main>
                <Outlet />
            </main>
        </div>
    )
}