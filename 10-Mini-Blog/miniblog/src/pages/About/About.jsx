import { Link } from 'react-router-dom'
import './About.module.css'
import styles from './About.module.css'

const About = () => {
  return (
    <div className={styles.customAbout}>
      <h1>Sobre o Mini <span>Blog</span></h1>
      <p>Este parágrafo consiste em um blog feito com React no front-end e Firebase no back-end.</p>
      <Link to="/posts/create" className="btn">Criar post</Link>
    </div>
  )
}

export default About
