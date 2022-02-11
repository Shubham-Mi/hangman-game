import React, { useEffect, useState } from "react";
import Layout from "./layout";
import { createSession, playInSession } from "../../api/session";

const ALL_ALPHABETS = [..."abcdefghijklmnopqrstuvwxyz"];
const MAX_LIVES = 6;

export default function Game() {
  const [session, setSession] = useState(null);
  const isRunning = !!session;
  const isWon = session
    ? session.result && session.livesLeft
      ? true
      : false
    : false;

  const start = async (name) => {
    const session = await createSession(name);
    setSession(session);

    ALL_ALPHABETS.forEach((alphabet) => {
      document.getElementById(`${alphabet}-button`).className = "letter-button";
    });
  };

  const guessLetter = async (letter) => {
    const updatedSession = await playInSession(session.id, letter);
    setSession(updatedSession);
    document.getElementById(`${letter}-button`).className =
      "letter-button played";
  };

  useEffect(() => {
    if (session && (isWon || session.livesLeft === 0)) {
      ALL_ALPHABETS.forEach((alphabet) => {
        document.getElementById(`${alphabet}-button`).className =
          "letter-button played";
      });
    }
  }, [isWon, session]);

  return (
    <Layout
      livesLeft={session ? session.livesLeft : MAX_LIVES}
      maskedWord={session ? session.maskedWord : new Array(0)}
      played_set={session ? new Set(session.playedLetters) : new Set()}
      guessLetter={guessLetter}
      start={start}
      isWon={isWon}
      isRunning={isRunning}
    />
  );
}
