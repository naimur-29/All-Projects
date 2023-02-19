import React, { useState, useEffect } from "react";

import Line from "./Line";

const Game = () => {
  const [userData, setUserData] = useState("");

  useEffect(() => {
    window.addEventListener("keydown", (event) =>
      userData.length < 5 ? setUserData(userData + event.key) : setUserData("")
    );

    return () => window.removeEventListener("keydown", setUserData);
  }, [userData]);

  console.log(userData);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
      <Line />
      <Line />
      <Line />
      <Line />
      <Line />
      <Line />
    </div>
  );
};

export default Game;
