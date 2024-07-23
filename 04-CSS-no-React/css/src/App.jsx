import { useState } from 'react';
import './App.css';
import Challenge5CSS from './components/Challenge5CSS';
import MyComponent from './components/MyComponent';
import Title from './components/Title';

function App() {
  const n = 15;
  const [nome] = useState("Cida");
  const redTitle = true;

  return (
    <div>
      { /* CSS Global */ }
      <h1>Título do App.jsx</h1>
      { /* CSS de Componente */ }
      <MyComponent />
      <p>Parágrafo do App.jsx</p>
      { /* Inline CSS - deve ser evitado pois leva tempo para aplicar manutenções */ }
      <p style={{color: "blue", padding: "25px", backgroundColor: "violet"}}>Este parágrafo foi estilizado de forma inline.</p>
      { /* Inline Style Dinâmico - existem outras opções melhores do que esta */ }
      <h2 style={n < 10 ? ({color: "purple"}) : ({color: "brown"})}>Parágrafo com CSS Dinâmico</h2>
      <h2 style={n > 10 ? ({color: "purple"}) : ({color: "brown"})}>Parágrafo com CSS Dinâmico</h2>
      <h2 style={nome === "Cida" ? ({color: "blue", backgroundColor: "gold"}) : null}>Teste nome com CSS Dinâmico</h2>
      {/* Classe CSS Dinâmica  */}
      <h2 className={redTitle ? "red-title": "beige-title"}>Este título vai ter classe CSS dinâmica</h2>
      { /* CSS Modules - muito utilizado */ }
      <Title />
      { /* Challenge 5 List Cars */}
      <h2 className='myListCars'>Challenge 5 CSS - Exibir detalhes dos carros:</h2>
      <Challenge5CSS />
    </div>
  )
}

export default App
