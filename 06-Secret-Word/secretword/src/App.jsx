// CSS
import './App.css';

// React
import React, { useCallback, useEffect, useState } from 'react';

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
  const guessesQty = 3;
  const [pickedWord, setPickedWord] = useState("");
  const [pickedCategory, setPickedCategory] = useState("");
  const [letters, setLetters] = useState([]);
  const [guessedLetters, setGuessedLetters] = useState([]);   // os acertos
  const [wrongLetters, setWrongLetters] = useState([]);       // os erros
  const [guesses, setGuesses] = useState(guessesQty);                  // as chances
  const [score, setScore] = useState(0);                      //  a pontuação

  const pickWordAndCategory = useCallback(() => {
    const categories = Object.keys(words);
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)];
    //console.log(category);

    const word = words[category][Math.floor(Math.random() * words[category].length)];
    //console.log(word);

    return {word, category};
  }, [words]);

  // starts the secret word game
  const startGame = useCallback(() => {
    // clear all letters state
    clearLettersStates();

    // escolha randomica de palavra e categoria - pick word and pick category
    const {word, category} = pickWordAndCategory();
    console.log(word, category);

    // separar a palavra em letras - create an array of letters
    let wordLetters = word.split("");

    // colocar as letras em minúsculo
    wordLetters = wordLetters.map((l) => l.toLowerCase());
    console.log(wordLetters);

    // alterando os estados - fill states
    setPickedWord(word);
    setPickedCategory(category);
    setLetters(wordLetters);

    setGameStage(stages[1].name);
  }, [pickWordAndCategory]);

  // process the letter input
  const verifyLetter = (letter) => {
    // padronizar a letra que recebemos do usuário
    const normalizedLetter = letter.toLowerCase();

    //check if çetter has already been utilized
    if(guessedLetters.includes(normalizedLetter) || wrongLetters.includes(normalizedLetter)){
      return
    }
    console.log(letter);

    // push guessed letter or remove a guess
    if(letters.includes(normalizedLetter)){
      setGuessedLetters((actualGuessedLetters)=>[
        ...actualGuessedLetters,
        normalizedLetter,
      ])
    }else{
      setWrongLetters((actualWrongLetters)=>[
        ...actualWrongLetters,
        normalizedLetter,
      ]);

      setGuesses((actualGuesses) => actualGuesses - 1);  // ir diminuindo a qtd de tentativas
    }
  };

  const clearLettersStates = () =>{
    setGuessedLetters([]);
    setWrongLetters([]);
  }

  // monitorar se a qtd de tentativas do jogo terminaram
  useEffect(() => {
    if(guesses <= 0){
      // reset all states
      clearLettersStates();

      setGameStage(stages[2].name);
    }
  }, [guesses]);

  console.log("Letras corretas: ", guessedLetters);
  console.log("Letras erradas: ", wrongLetters);

  // monitorar as letras que acertou
  useEffect(()=> {
    const uniqueLetters = [...new Set(letters)];

    // win condition
    if(guessedLetters.length === uniqueLetters.length){
      // add score
      setScore((actualScore)=> actualScore += 100);

      // restart game with new word
      startGame();
    }
    console.log(uniqueLetters);
  }, [guessedLetters, letters, startGame])

  // restarts the game
  const retry = () => {
    setScore(0);
    setGuesses(guessesQty);
    setGameStage(stages[0].name);
  }
  return (
    <div className="app">
      {gameStage === 'start' && <StartScreen startGameProp={startGame}/> }
      {gameStage === 'game' && 
      (<Game verifyLetterProp={verifyLetter}
        pickedWord={pickedWord} 
        pickedCategory={pickedCategory}
        letters={letters}
        guessedLetters={guessedLetters}
        wrongLetters={wrongLetters}
        guesses={guesses}
        score={score}
      /> )}
      {gameStage === 'end' && <GameOver retryProp={retry} scoreProp={score} /> }
      
    </div>
  )
}

export default App
