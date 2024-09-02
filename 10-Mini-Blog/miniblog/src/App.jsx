import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import About from './pages/About/About'
import Home from './pages/Home/Home'

function App() {

  return (
    <div className='App'>
      <BrowserRouter>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
      </BrowserRouter>
      <Footer />
    </div>
  )
}

export default App
