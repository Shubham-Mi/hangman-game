import React, { useState } from "react";

export default function Start({ onStart, isRunning }) {
  const [name, setName] = useState("");

  return (
    <div className="start-button field">
      <div className="inout-field">
        <input
          type="text"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
          name={name}
          value={name}
          id="name-input"
          className="name-input"
        />
        <label
          className="form__label"
          onClick={() => {
            document.getElementById("name-input").focus();
          }}
        >
          Name
        </label>
      </div>
      <button
        onClick={() => onStart(name)}
        className="btn btn-white btn-animate"
      >
        {isRunning ? "Reset" : "Start"}
      </button>
    </div>
  );
}
