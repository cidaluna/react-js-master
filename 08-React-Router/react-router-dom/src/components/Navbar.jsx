import { NavLink } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav>
     {/*
      <Link to="/">Home</Link> redireciona trocando os componentes, nao usamos a tag a pois ela faz reload 
      <Link to="/about">Sobre</Link>
      */}
      <NavLink 
      to="/"
      // className={({ isActive}) => (isActive ? "esta-ativo" : "nao-ativo")}
      >Home</NavLink>
      <NavLink 
      to="/about"
      style={({ isActive }) => ({
        fontWeight: isActive ? 'bold' : 'normal',
        color: isActive ? 'red' : 'blue',
      })}
      >Sobre</NavLink>
    </nav>
  )
}

export default Navbar
