import { useContext } from "react";
import CounterContext from "../context/CounterContext";
import TitleColorContext from "../context/TitleColorContext";

const About = () => {
  // Trazendo o contexto alterado para página about
  const { counter } = useContext(CounterContext);

  const { color } = useContext(TitleColorContext);

  return (
    <div>
      <h3 style={{ color: color }}>Página Sobre</h3>  {/* só consome o contexto */}
      <p>O valor do contador é {counter} </p>
    </div>
  )
}

export default About
