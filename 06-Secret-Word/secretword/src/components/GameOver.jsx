import './GameOver.css';

const GameOver = ({retryProp, scoreProp}) => {
  return (
    <div>
      <h1>Fim do jogo!</h1>
      <h2 className="text">A sua pontuação foi: <span>{scoreProp} </span></h2>
      <button onClick={retryProp}>Resetar jogo</button>
    </div>
  )
}

export default GameOver
