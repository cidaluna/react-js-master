import { useState } from "react";
import './MyForm.css';

const MyForm = () => {
    // 3 - Gerenciamento de dados
    const [name, setName] = useState();
    const [email, setEmail] = useState();

    const handleName = (e) => {
       setName(e.target.value);
    };

    console.log(name);
    console.log(email);

  return (
    <div>
      {/* 1- Criação de form */}
      <form>
        <div>
            <label htmlFor="name">Nome: </label>
            <input type="text" name="name" placeholder="Digite o seu nome" onChange={handleName}/>
        </div>
        {/* 2- Label envolvendo input - Opção sugerida na documentação do React */}
        <label>
            <span>Email: </span>
            <input type="email" name="email" placeholder="seumelhoremail@aqui.com" 
            onChange={(e)=> setEmail(e.target.value)}
            />
        </label>
        <input type="button" value="Enviar" />
      </form>
    </div>
  )
}

export default MyForm
