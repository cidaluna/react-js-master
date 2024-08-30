import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
// components
import Navbar from './components/Navbar'
import SearchForm from './components/SearchForm'

//pages
import About from './pages/About'
import Home from './pages/Home'
import Info from './pages/Info'
import NotFound from './pages/NotFound'
import Product from './pages/Product'
import ResultSearch from './pages/ResultSearch'

function App() {

  return (
    <>
      <div>
        <h1>React Router</h1>
        <Router>
        <SearchForm></SearchForm>
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products/:idcustom/info" element={<Info />} />
            <Route path="/products/:idcustom" element={<Product />} /> 
            <Route path="/search" element={<ResultSearch />} />
            <Route path="*" element={<NotFound />} />     
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App
