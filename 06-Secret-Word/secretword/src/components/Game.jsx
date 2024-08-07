import { useRef, useState } from 'react';
import './Game.css';

const Game = ({verifyLetterProp, pickedWord, pickedCategory, letters, guessedLetters,
  wrongLetters, guesses, score}) => {

  const [letter, setLetter] = useState("");
  const letterInputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    verifyLetterProp(letter);
    setLetter(""); {/* limpar o campo após o envio da letra pelo clique do botão jogar */}
    letterInputRef.current.focus(); {/* após capturar esse elemento no DOM por referência eu aplico o focus */}
  }
  return (
    <div className="game">
      <p className="points">
        <span>Pontuação: {score}</span>
      </p>
      <h1>Adivinhe a palavra:</h1>
      <h3 className="tip">
        Dica sobre a palavra: <span>{pickedCategory}</span>
      </h3>
      <p>Você ainda tem {guesses} tentativa(s).</p>
      <div className="wordContainer">
        {letters.map((letter, i) =>
          guessedLetters.includes(letter) ? (
            <span key={i} className="letter">
              {letter}
            </span>
          ) : (
            <span key={i} className="blankSquare"></span>
          )
        )}
      </div>
      <div className="letterContainer">
        <p>Tente adivinhar uma letra da palavra: </p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="letter"
            maxLength="1"
            required
            value={letter}
            ref={letterInputRef}
            onChange={(e) => setLetter(e.target.value)}
          />
          <button>Jogar!</button>
        </form>
      </div>
      <div className="wrongLettersContainer">
        <p>Letras já utilizadas:</p>
        {wrongLetters.map((letter, i) => (
          <span key={i}> {letter}, </span>
        ))}
      </div>
    </div>
  );
}

export default Game
