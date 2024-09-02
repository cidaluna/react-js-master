import { useContext } from "react";
import CounterContext from "../context/CounterContext";

const Home = () => {
  const { counter } = useContext(CounterContext);
  return (
    <div>
      <h3>Página Home</h3>
      <p>Valor do contador: {counter} </p>
    </div>
  )
}

export default Home
