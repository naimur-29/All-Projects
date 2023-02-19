import React from "react";

const Box = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "lightsalmon",
        width: "80px",
        height: "80px",
        border: "2px solid #fff",
        borderRadius: "8px",
        color: "#fff",
        textShadow: "3px 5px 5px rgba(0, 0, 0, 0.15)",
        fontSize: "2.7rem",
        fontWeight: "bold",
      }}
    ></div>
  );
};

export default Box;
