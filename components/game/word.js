import React from "react";

export default function Word({ maskedWord }) {
  return (
    <div className="word">
      {maskedWord.map((letter, key) => {
        return (
          <span className="words" key={key}>
            &nbsp; {letter} &nbsp;
          </span>
        );
      })}
    </div>
  );
}
