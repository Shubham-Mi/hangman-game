import React, { useEffect, useState } from "react";
import Lives from "./lives";
import Word from "./word";
import Letters from "./letters";
import Start from "./start";
import Title from "./title";

const ALL_ALPHABETS = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
const MAX_LIVES = 6;

export default function Game() {
  const [actualWord, setActualWord] = useState("");
  const [playedLetters, setPlayedLetters] = useState([]);
  const [isRunning, setIsRunning] = useState(false);

  const word_set = new Set([...actualWord]);
  const played_set = new Set(playedLetters);

  const wrongLetters = playedLetters.filter((letter) => {
    return !word_set.has(letter);
  });
  const livesLeft = MAX_LIVES - wrongLetters.length;

  const isWon =
    isRunning &&
    [...word_set].reduce((acc, curr) => {
      if (!played_set.has(curr)) return false;
      return acc;
    }, true);

  const guessLetter = (letter) => {
    setPlayedLetters((prev) => [...prev, letter]);
    document.getElementById(`${letter}-button`).className =
      "letter-button played";
  };

  const start = () => {
    setActualWord("JUKEBOX");
    setPlayedLetters([]);
    setIsRunning(true);

    ALL_ALPHABETS.forEach((alphabet) => {
      document.getElementById(`${alphabet}-button`).className = "letter-button";
    });
  };

  useEffect(() => {
    if (isWon || livesLeft === 0) {
      ALL_ALPHABETS.forEach((alphabet) => {
        document.getElementById(`${alphabet}-button`).className =
          "letter-button played";
      });
    }
  }, [isWon, livesLeft]);

  return (
    <div className="game">
      <Title />
      <div className="play-area">
        <div className="game-container">
          <div className="lives-container">
            <Lives livesLeft={livesLeft} />
          </div>
          <div className="word-container">
            <Word actualWord={actualWord} playedLetters={played_set} />
            <Letters playedLetters={played_set} onSelect={guessLetter} />
          </div>
        </div>
      </div>
      <Start onStart={start} />
      {isWon && <div className="game-end">You won!</div>}
      {livesLeft === 0 && <div className="game-end">You lost!</div>}
    </div>
  );
}
