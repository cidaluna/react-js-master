// CSS
import './App.css';

// React
import { useState } from 'react';

// Data
import { wordsList } from './data/words';

// Components
import Game from './components/Game';
import GameOver from './components/GameOver';
import StartScreen from './components/StartScreen';

const stages = [
  {id: 1, name: 'start'},
  {id: 2, name: 'game'},
  {id: 3, name: 'end'},
];

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList);
  console.log(words);

  // starts the secret word game
  const startGame = () => {
    setGameStage(stages[1].name);
  }

  // process the letter input
  const verifyLetter = () => {
    setGameStage(stages[2].name);
  }

  // restarts the game
  const retry = () => {
    setGameStage(stages[0].name);
  }

  return (
    <div className="app">
      {gameStage === 'start' && <StartScreen startGameProp={startGame}/> }
      {gameStage === 'game' && <Game verifyLetterProp={verifyLetter} /> }
      {gameStage === 'end' && <GameOver retryProp={retry} /> }
      
    </div>
  )
}

export default App
