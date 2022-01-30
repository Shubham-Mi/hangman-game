import React, { useEffect, useState } from "react";
import Layout from "./layout";

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
    <Layout
      livesLeft={livesLeft}
      actualWord={actualWord}
      played_set={played_set}
      guessLetter={guessLetter}
      start={start}
      isWon={isWon}
      isRunning={isRunning}
    />
  );
}
