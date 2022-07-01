import React, { useState } from "react";

import Box from "./Box";

const Line = ({ setUserGuess }) => {
  const [Guess, setGuess] = useState("");

  const constructGuess = (val) => {
    setGuess(Guess + val);
  };
  Guess.length === 5 && setUserGuess(Guess);

  return (
    <div>
      <Box constructGuess={constructGuess} />
      <Box constructGuess={constructGuess} />
      <Box constructGuess={constructGuess} />
      <Box constructGuess={constructGuess} />
      <Box constructGuess={constructGuess} />
    </div>
  );
};

export default Line;
