import './GameOver.css';

const GameOver = ({retryProp}) => {
  return (
    <div>
      <h1>Game Over!</h1>
      <button onClick={retryProp}>Resetar jogo</button>
    </div>
  )
}

export default GameOver
