import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
// components
import Navbar from './components/Navbar'

//pages
import About from './pages/About'
import Home from './pages/Home'
import Product from './pages/Product'

function App() {

  return (
    <>
      <div>
        <h1>React Router</h1>
        <Router>
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products/:idcustom" element={<Product />} />
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App
