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

  const [pickedWord, setPickedWord] = useState("");
  const [pickedCategory, setPickedCategory] = useState("");
  const [letters, setLetters] = useState([]);

  const pickWordAndCategory = () => {
    const categories = Object.keys(words);
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)];
    //console.log(category);

    const word = words[category][Math.floor(Math.random() * words[category].length)];
    //console.log(word);

    return {word, category};
  }

  // starts the secret word game
  const startGame = () => {
    // escolha randomica de palavra e categoria - pick word and pick category
    const {word, category} = pickWordAndCategory();
    console.log(word, category);

    // separar a palavra em letras - create an array os letters
    let wordLetters = word.split("");

    // colocar as letras em minúsculo
    wordLetters = wordLetters.map((l) => l.toLowerCase());
    console.log(wordLetters);

    // alterando os estados - fill states
    setPickedWord(word);
    setPickedCategory(category);
    setLetters(letters);

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
