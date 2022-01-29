import React from "react";

export default function Start({ onStart }) {
  return (
    <div className="start">
      <button onClick={() => onStart()} className="start-button">
        Start a new game!
      </button>
    </div>
  );
}
