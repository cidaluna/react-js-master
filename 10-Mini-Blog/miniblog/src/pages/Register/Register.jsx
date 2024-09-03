
const Register = () => {
  return (
    <div>
      <h1>Cadastre-se para postar</h1>
      <p>Crie seu usuário e compartilhe suas histórias!</p>
      <form>
        <label>
            <span>Nome: </span>
            <input type="text" name="displayName" required placeholder="Nome do usuário" />
        </label>
        <label>
            <span>Email: </span>
            <input type="email" name="displayEmail" required placeholder="Email do usuário" />
        </label>
        <label>
            <span>Senha: </span>
            <input type="password" name="displayPassword" required placeholder="Insira sua senha" />
        </label>
        <label>
            <span>Confirmação de senha: </span>
            <input type="password" name="displayConfirmaPassword" required placeholder="Confirma senha" />
        </label>
        <button className="btn">Cadastrar</button>
      </form>
    </div>
  )
}

export default Register
