import { useState } from 'react';

const ManageData = () => {
    let someData = 10;
    console.log(someData);

    let [nome, setNome] = useState('Cida');
    console.log(nome);

    let [qtdProdCarrinho, setQtdProdCarrinho] = useState(0);
    console.log(qtdProdCarrinho);

  return (
    <div>
      <div className='teste-var'>
        <p>Variável valor: {someData}</p>
        <button onClick={() => (someData = 11)}>Teste com variável</button>
        <p>
          Embora tenha passado um novo valor para a variável, ao re-renderizar a
          página ela mantem o valor inicial 10.
        </p>
      </div>
      <div className='teste-state'>
        <p>State Valor: {nome}</p>
        <button onClick={() => setNome("Luna")}>Mudar o state</button>
        <p>
          Utilizando hook useState, tenho o retorno original 'Cida' e ao
          re-renderizar a página vou ter sempre o valor alterado para 'Luna'.
        </p>
      </div>
      <div className='teste-state'>
        <p>State Qdt Produtos: {qtdProdCarrinho}</p>
        <button onClick={() => setQtdProdCarrinho(qtdProdCarrinho + 1)}>Mudar o state</button>
        <p>
          Utilizando hook useState, tenho o retorno original quantidade de produtos = 0 e ao
          re-renderizar a página vou ter sempre o valor alterado para quantidade + 1.
        </p>
      </div>
    </div>
  );
}

export default ManageData
