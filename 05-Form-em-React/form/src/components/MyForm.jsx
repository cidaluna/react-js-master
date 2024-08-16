import { useState } from "react";
import styles from './MyForm.module.css';

const MyForm = ({ userProp }) => {
    // 3 - Gerenciamento de dados
    const [name, setName] = useState(userProp ? userProp.name : "");
    const [email, setEmail] = useState(userProp ? userProp.email : "");

    const [bio, setBio] = useState(userProp ? userProp.bio : "");
    const [role, setRole] = useState(userProp ? userProp.role : "");

    const handleName = (e) => {
       setName(e.target.value);
    };

    const handleSubmit = (e) => {
      e.preventDefault();  
      console.log('Enviando o formulário');
      console.log(name, email, bio, role);
      // após aplicar validações customizadas
      // realizar o envio
      // 7 - etapa de limpar formulário (reset)
      setName("");
      setEmail("");
      setBio("");
      setRole("");
  };

  return (
    <div>
      {/* 6- Controlled input */}
      {/* 5- Envio de form através do onSubmit*/}
      {/* 1- Criação de form */}
      <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="name">Nome: </label>
            <input className={styles.myInput} type="text" id="name" name="name" placeholder="Digite o seu nome" 
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
        {/* 8 - Textarea */}
        <label>
          <span>Bio: </span>
          <textarea name="bio" placeholder="Descrição do usuário"
          onChange={(e) => setBio(e.target.value)} value={bio} />
        </label>
        {/* 9 - Select  */}
        <label>
          <span>Função:</span>
          <select name="role" onChange={(e) => setRole(e.target.value)} value={role}>
            <option value="user">Usuário</option>
            <option value="editor">Editor</option>
            <option value="admin">Administrador</option>
          </select>
        </label>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default MyForm