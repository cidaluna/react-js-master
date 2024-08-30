import { useSearchParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const ResultSearch = () => {
  const [searchParams] = useSearchParams();

  const url = "http://localhost:3000/products?" + searchParams;
  
  const { data: items, loading, error} = useFetch(url);

  return (
    <div>
      <h2>Result Search Page</h2>
      <h3>Resultados Disponíveis</h3>
      <ul>
        {items && items.map((item) => (
          <li key={item.id}>
            <p>{item.name}</p>
            <p>R$ {item.price}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ResultSearch
