import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const Product = () => {

  const { idcustom } = useParams();
  const url = "http://localhost:3000/products/" + idcustom;
  const { data: product, loading, error } = useFetch(url);

  console.log(product);

  return (
    <>
      <p>ID do produto: {idcustom} </p>
      {error && <p>Ocorreu um erro</p>}
      {loading && <p>Carregando...</p>}
      {product && (
        <div>
            <h1>{product.name}</h1>
            <p>Valor: R$ {product.price}</p>
        </div>
      )}
    </>
  )
}

export default Product
