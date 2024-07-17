import { useState } from 'react';

const ConditionalRender = () => {

    const [x] = useState(true);  // Inicializa com verdade
    const [name, setName] = useState("Cici");

  return (
    <div>
      <h1>Isso será exibido ?</h1>
      {x && <p>Se x for true, sim!</p>}  { /* V && V = V */}
      {!x && <p>Agora o x é falso!</p>}  { /* F && F = F */}
      {name === "Cida Luna" ? (
        <div>
          <p>O nome é Cida Luna</p>
        </div>
      ) : (
        <div>Nome não encontrado!</div>
      ) }
      <button onClick={() => setName("Cida Luna")}>Reset nome</button>
    </div>
  );
};

export default ConditionalRender;
