import { Routes, Route } from 'react-router-dom'
import LoginPage from "./pages/LoginPage.jsx";
import TicTacToe from './pages/TicTacToe.jsx'

function Home() {
  return (
  <h1>React Practice</h1>
  )
}

function App() {
  return (
  <div className="AppContent">
      <main style={{ padding: 24 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/tictactoe" element={<TicTacToe />} />
        </Routes>
      </main>
    </div>
  )
}

export default App