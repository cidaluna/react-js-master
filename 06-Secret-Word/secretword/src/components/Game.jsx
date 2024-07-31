import './Game.css';

const Game = ({verifyLetterProp}) => {
  return (
    <div>
      <h1>Game</h1>
      <button onClick={verifyLetterProp}>Finalizar jogo</button>
    </div>
  )
}

export default Game
