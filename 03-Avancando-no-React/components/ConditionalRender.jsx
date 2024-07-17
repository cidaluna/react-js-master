import { useState } from 'react';

const ConditionalRender = () => {

    const [x] = useState(true);  // Inicializa com verdade

  return (
    <div>
      <h1>Isso será exibido ?</h1>
      {x && <p>Se x for true, sim!</p>}  { /* V && V = V */}
      {!x && <p>Agora o x é falso!</p>}  { /* F && F = F */}
    </div>
  );
};

export default ConditionalRender;
