import React from "react";

const MAX_LIVES = 6;
export default function Lives({ livesLeft }) {
  return (
    <div className="lives">
      <div className="lives-left">
        {[...Array(livesLeft)].map((_, key) => {
          return <span key={key}>❤️</span>;
        })}
      </div>

      <div className="hangman-container">
        <div className="pole"></div>
        <div className={`hangman hangman-${MAX_LIVES - livesLeft}`}>
          <div className="hangman__element"></div>
          <div className="hangman__element"></div>
          <div className="hangman__element"></div>
          <div className="hangman__element"></div>
          <div className="hangman__element"></div>
          <div className="hangman__element"></div>
        </div>
      </div>
    </div>
  );
}
