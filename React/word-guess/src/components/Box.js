import React, { useState, useEffect } from "react";

const Box = ({ constructGuess }) => {
  const [value, setValue] = useState("");

  useEffect(() => {
    constructGuess(value);
  }, [value, constructGuess]);

  return (
    <>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value[0])}
        style={{
          width: "40px",
          height: "40px",
          textAlign: "center",
          fontSize: "22px",
          textTransform: "uppercase",
        }}
      />
    </>
  );
};

export default Box;
