import React, { useState } from "react";

import "./App.css";

import Input from "./components/Input";
// import Game from "./components/Game";
import Game from "./components/approach2/Game";

const App = () => {
  const [correctWord, setCorrectWord] = useState("");
  const [userGuess, setUserGuess] = useState("");

  correctWord && console.log(correctWord);
  userGuess && console.log(userGuess);

  return (
    <>
      {!correctWord && <Input setCorrectWord={setCorrectWord} />}
      {correctWord && <Game setUserGuess={setUserGuess} />}
    </>
  );
};

export default App;
