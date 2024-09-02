import { useContext } from "react";
import CounterContext from "../context/CounterContext";

const About = () => {
  // Trazendo o contexto alterado para página about
  const { counter } = useContext(CounterContext);

  return (
    <div>
      <h3>Página Sobre</h3>
      <p>O valor do contador é {counter} </p>
    </div>
  )
}

export default About
