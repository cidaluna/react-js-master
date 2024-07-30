import { useState } from "react";
import './MyForm.css';

const MyForm = ({ userProp }) => {
    // 3 - Gerenciamento de dados
    const [name, setName] = useState(userProp ? userProp.name : "");
    const [email, setEmail] = useState(userProp ? userProp.email : "");

    const handleName = (e) => {
       setName(e.target.value);
    };

    const handleSubmit = (e) => {
      e.preventDefault();  
      console.log('Enviando o formulário');
      console.log(name);
      console.log(email);
    };

    // console.log(name);
    // console.log(email);

  return (
    <div>
      {/* 6- Controlled input */}
      {/* 5- Envio de form através do onSubmit*/}
      {/* 1- Criação de form */}
      <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="name">Nome: </label>
            <input type="text" name="name" placeholder="Digite o seu nome" 
            onChange={handleName}
            value={name}
            />
        </div>
        {/* 2- Label envolvendo input - Opção sugerida na documentação do React */}
        <label>
            <span>Email: </span>
            {/* 4- Simplificação de manipulação de state */ }
            <input type="email" name="email" placeholder="seumelhoremail@aqui.com" 
            onChange={(e)=> setEmail(e.target.value)}
            value={email}
            />
        </label>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  )
}

export default MyForm
