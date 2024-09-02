import ChangeCounter from "../components/ChangeCounter";
import { useCounterContext } from "../hooks/useCounterContext";

const Home = () => {
  //const { counter } = useContext(CounterContext);

  const { counter } = useCounterContext(); // utilizando o hook

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
