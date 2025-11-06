import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from "./pages/LoginPage.jsx";
import Navbar from './componenets/Navbar.jsx'

function Home() {
  return (
    <div style={{ padding: 24 }}>
      <h1>Welcome</h1>
      <p>Use the navigation to open the login page.</p>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <main style={{ padding: 24 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App