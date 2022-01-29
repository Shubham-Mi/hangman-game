import React from "react";

export default function Word({ actualWord, playedLetters }) {
  return (
    <div className="word">
      {actualWord.split("").map((letter, key) => {
        return playedLetters.has(letter) ? (
          <span className="words" key={key}>
            {letter}
          </span>
        ) : (
          <span className="words" key={key}>
            &nbsp; _ &nbsp;
          </span>
        );
      })}
    </div>
  );
}
