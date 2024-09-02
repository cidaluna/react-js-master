import { useContext } from "react";
import ChangeCounter from "../components/ChangeCounter";
import CounterContext from "../context/CounterContext";

const Home = () => {
  const { counter } = useContext(CounterContext);
  return (
    <div>
      <h3>Página Home</h3>
      <p>Valor do contador: {counter} </p>
      { /*  3 - Alterando o valor do contexto */ }
      <ChangeCounter />
    </div>
  )
}

export default Home
