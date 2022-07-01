import React, { useState } from "react";

const Input = ({ setCorrectWord }) => {
  const [userValue, setUserValue] = useState("");

  const isUserValueApproved = (word) => {
    return word.length === 5 && !word.includes(" ");
  };

  return (
    <>
      <label htmlFor="correctWord">Enter Correct Word</label>
      <br />
      <input
        value={userValue.toUpperCase()}
        type="text"
        onChange={(event) => setUserValue(event.target.value)}
      />
      <br />
      <button
        onClick={() => {
          isUserValueApproved(userValue)
            ? setCorrectWord(userValue.toUpperCase())
            : alert("enter a 5 letter valid word!!");
        }}
      >
        Start The Game
      </button>
    </>
  );
};

export default Input;
