import { Link } from 'react-router-dom'

const LinkStyle = "text-slate-900 font-semibold font-bold hover:underline ";
function Navbar() {
  return (
    <header className="bg-indigo-300 py-16 shadow-sm sticky top-0 z-50 w-full h-20 align-middle justify-between">
      <nav className="w-full px-6 py-3 flex gap-6 items-center justify-around align-middle text-xl ">
        <Link to="/" className={LinkStyle}>
          Home
        </Link>
        <Link to="/login" className={LinkStyle}>
          Login Page
        </Link>
        <Link to="/tictactoe" className={LinkStyle}>
          Tic Tac Toe
        </Link>
        
      </nav>
    </header>
  )
}

export default Navbar
