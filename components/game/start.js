import React from "react";

export default function Start({ onStart, isRunning }) {
  return (
    <div className="start-button">
      <button onClick={() => onStart()} className="btn btn-white btn-animate">
        {isRunning ? "Reset" : "Start"}
      </button>
    </div>
  );
}
