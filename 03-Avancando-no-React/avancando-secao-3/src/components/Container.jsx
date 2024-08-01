
const Container = ({ children, myValue }) => { {/* Lembrar de desestruturar children */ }
  return (
    <div>
      <h2>Este é o título do container</h2>
      {children}  {/* Aqui será renderizado o conteúdo */}
      <p>O valor é: {myValue} </p>
    </div>
  )
}

export default Container
