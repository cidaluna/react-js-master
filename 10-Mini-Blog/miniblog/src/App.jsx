import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import About from './pages/About/About'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'

function App() {

  return (
    <div className='App'>
      <BrowserRouter>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
      </BrowserRouter>
      <Footer />
    </div>
  )
}

export default App
