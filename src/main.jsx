import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route} from 'react-router'
import './index.css'
import AppLayout from './layouts/AppLayout.jsx'
import Login from './pages/Login.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Admin from './pages/Admin.jsx'
import ProtectedRoute from './layouts/ProtectedRoute.jsx'
import AuthProvider from './context/AuthContext.jsx'
import Unauthorized from './pages/Unauthorized.jsx'
import NotFound from './pages/NotFound.jsx'

createRoot(document.getElementById('root')).render(
    <AuthProvider>
        <BrowserRouter>
        <Routes>
            <Route>
                <Route index element={<AppLayout />} />
                <Route path="login" element={<Login />} />

                {/* Protected Routes   */}
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
        </BrowserRouter>
    </AuthProvider>
)
