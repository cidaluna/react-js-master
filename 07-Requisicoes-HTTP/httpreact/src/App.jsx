import { useEffect, useState } from 'react';
import './App.css';

const url = "http://localhost:3000/products"
function App() {
  const [products, setProducts] = useState([]);

  // 1 - Resgatando dados
  useEffect(()=> {
    async function fetchData() {
      const res = await fetch(url);
      const data = await res.json();
      setProducts(data)
    }
    fetchData();
  }, []);

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
   </div>
  )
}

export default App
