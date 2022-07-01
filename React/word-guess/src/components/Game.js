import React from "react";

import Line from "./Line";

const Game = ({ setUserGuess }) => {
  return (
    <>
      <Line setUserGuess={setUserGuess} />
      <Line />
      <Line />
      <Line />
      <Line />
      <Line />
    </>
  );
};

export default Game;
