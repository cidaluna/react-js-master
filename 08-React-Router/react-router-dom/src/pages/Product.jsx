import { Link, useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const Product = () => {

  const { idcustom } = useParams();
  const url = "http://localhost:3000/products/" + idcustom;
  const { data: product, loading, error } = useFetch(url);

  console.log(product);

  return (
    <>
      <h2>Detalhes - ID do produto: {idcustom} </h2>
      {error && <p>Ocorreu um erro</p>}
      {loading && <p>Carregando...</p>}
      {product && (
        <div>
            <h1>{product.name}</h1>
            <p>Valor: R$ {product.price}</p>
            {/*  Nested Route */ }
            <Link to={`/products/${idcustom}/info`}>Mais informações</Link>
        </div>
      )}
    </>
  )
}

export default Product
