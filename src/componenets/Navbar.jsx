import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 1000, background: '#ffffff', boxShadow: '0 1px 0 rgba(0,0,0,0.06)' }}>
      <nav style={{ padding: '12px 16px', display: 'flex', gap: 16, maxWidth: 1100, margin: '0 auto', alignItems: 'center' }}>
        <Link to="/" style={{ textDecoration: 'none', color: '#111827', fontWeight: 600 }}>
          Home
        </Link>
        {/* Path-based login route */}
        <Link to="/login" style={{ textDecoration: 'none', color: '#111827', fontWeight: 600 }}>
          Login Page
        </Link>
      </nav>
    </header>
  )
}

export default Navbar
