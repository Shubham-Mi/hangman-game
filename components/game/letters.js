import React from "react";

const ALL_ALPHABETS = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"];

export default function Letters({ playedLetters, onSelect }) {
  return (
    <div className="letters">
      {ALL_ALPHABETS.map((alphabet, key) => {
        return (
          <button
            key={key}
            onClick={() => onSelect(alphabet)}
            disabled={playedLetters.has(alphabet)}
            id={`${alphabet}-button`}
            className="letter-button played"
          >
            {alphabet}
          </button>
        );
      })}
    </div>
  );
}
