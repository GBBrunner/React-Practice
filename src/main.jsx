import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './index.css'
import AppLayout from './layouts/AppLayout.jsx'
import Login from './pages/Login.jsx'
import UserPage from './pages/UserPage.jsx'
import useAuth from './hooks/useAuth.js'
import Dashboard from './pages/Dashboard.jsx'
import Admin from './pages/Admin.jsx'
import ProtectedRoute from './layouts/ProtectedRoute.jsx'
import AuthProvider from './context/AuthContext.jsx'
import Unauthorized from './pages/Unauthorized.jsx'
import NotFound from './pages/NotFound.jsx'

function AppRoutes() {
    // Access currentUser from context; treat string 'guest' as unauthenticated
    const { currentUser } = useAuth();
    const isGuest = currentUser === 'guest';
    return (
        <Routes>
            <Route>
                <Route index element={<AppLayout />} />
                <Route path="login" element={isGuest ? <Login /> : <Navigate to="/user" replace />} />
                <Route path="user" element={<UserPage />} />
                {/* Protected Routes */}
                <Route>
                    <Route path="dashboard" element={<Dashboard />} />
                </Route>
                <Route element={<ProtectedRoute roles={['admin']} />}>
                    <Route path="admin" element={<Admin />} />
                </Route>
                <Route path="unauthorized" element={<Unauthorized />} />
            </Route>
            <Route path='*' element={<NotFound />}/>
        </Routes>
    );
}

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <AuthProvider>
            <AppRoutes />
        </AuthProvider>
    </BrowserRouter>
)