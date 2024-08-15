import { useEffect, useState } from 'react';
import './App.css';

const url = "http://localhost:3000/products"
function App() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);

  // 1 - Resgatando dados
  useEffect(()=> {
    async function fetchData() {
      const res = await fetch(url);
      const data = await res.json();
      setProducts(data)
    }
    fetchData();
  }, []);

  // 2- adicionando produtos
  const handleSubmit = async(e) => {
    e.preventDefault();
    const product = {
      name,
      price,
    };

    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(product),
    });
  
  // 3 - carregamento dinâmico de dados
  const addedProduct = await res.json();
  setProducts((previousProduct) => [...previousProduct, addedProduct]);

  setName("");
  setPrice("");
};
  return (
   <div className="app">
    <h1>Lista de Produtos</h1>
    <ul>
      {products.map((prod) => (
        <li key={prod.id}>
          {prod.name} - R$ {prod.price}
        </li>
      ))}
    </ul>
    <div className="add-product">
      <form onSubmit={handleSubmit}>
        <label>
          Nome:
          <input type="text" value={name} name="name" onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          Price:
          <input type="number" value={price} name="price" onChange={(e) => setPrice(e.target.value)} />
        </label>
        <input type="submit" value="Criar" />
      </form>
    </div>
   </div>
  )
}

export default App
