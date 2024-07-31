import './StartScreen.css';

const StartScreen = ({startGameProp}) => {
  return (
    <div className="start">
        <h1>Secret Word</h1>
        <p>Clique no botão abaixo para começar a jogar</p>
        <button onClick={startGameProp}>Começar o jogo</button>
    </div>
  )
}

export default StartScreen
