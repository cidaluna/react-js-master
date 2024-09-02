import ChangeCounter from "../components/ChangeCounter";
import { useCounterContext } from "../hooks/useCounterContext.jsx";
import { useTitleColorContext } from "../hooks/useTitleColorContext.jsx";

const Home = () => {
  //const { counter } = useContext(CounterContext);

  const { counter } = useCounterContext(); // 4 - refatorando utilizando o hook

  // 5 - Context mais complexo
  const { color } = useTitleColorContext();

  return (
    <div>
      <h3 style={{color: color}}>Página Home</h3>
      <p>Valor do contador: {counter} </p>
      { /*  3 - Alterando o valor do contexto */ }
      <ChangeCounter />
    </div>
  )
}

export default Home
