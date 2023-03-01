import React, { useState } from "react";
import "./Calculator.css";

import Display from "./Display";
import Buttons from "./Buttons";

const buttons = [
  "AC",
  "()",
  "%",
  "/",
  "7",
  "8",
  "9",
  "×",
  "4",
  "5",
  "6",
  "-",
  "1",
  "2",
  "3",
  "+",
  "0",
  ".",
  "<=",
  "=",
];

const Calculator = () => {
  const [displayValue, setDisplayValue] = useState({
    value: "",
    currentStatement: "",
    operator: "",
    prevOperator: "",
    result: null,
    isFinished: false,
  });

  return (
    <>
      <div className="calculator-container">
        <Display displayValue={displayValue} />
        <div className="buttons-container">
          {buttons.map((buttonText) => (
            <Buttons
              key={buttonText}
              text={buttonText}
              displayValue={displayValue}
              setDisplayValue={setDisplayValue}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Calculator;
