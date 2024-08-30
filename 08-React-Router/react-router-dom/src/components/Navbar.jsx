import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>  {/* redireciona trocando os componentes, nao usamos a tag a pois ela faz reload */}
      <Link to="/about">Sobre</Link>
    </nav>
  )
}

export default Navbar
