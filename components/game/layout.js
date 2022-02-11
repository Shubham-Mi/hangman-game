import React from "react";
import Lives from "./lives";
import Word from "./word";
import Letters from "./letters";
import Start from "./start";
import Title from "./title";

export default function Layout({
  livesLeft,
  maskedWord,
  played_set,
  guessLetter,
  start,
  isWon,
  isRunning,
}) {
  return (
    <div className="game">
      <Title />
      <div className="play-area">
        <div className="left-container">
          <Lives livesLeft={livesLeft} />
        </div>
        <div className="right-container">
          <Word maskedWord={maskedWord} />
          <Letters playedLetters={played_set} onSelect={guessLetter} />
        </div>
      </div>
      <Start onStart={start} isRunning={isRunning} />
      {isWon && <div className="game-end">You won!</div>}
      {livesLeft === 0 && <div className="game-end">You lost!</div>}
    </div>
  );
}
