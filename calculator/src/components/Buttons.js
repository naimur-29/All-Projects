import React, { useState } from "react";

const Buttons = ({ text, displayValue, setDisplayValue }) => {
  const handleSetDisplayValue = () => {
    let value = { ...displayValue };

    const handleOperators = () => {
      value.prevOperator = value.operator;

      if (value.result) {
        if (value.operator === "+") {
          value.result += value.currentStatement * 1;
        } else if (value.operator === "-") {
          value.result -= value.currentStatement * 1;
        } else if (value.operator === "/") {
          value.result /= value.currentStatement * 1;
        } else {
          value.result *= value.currentStatement * 1;
        }
      } else {
        value.result = value.currentStatement * 1;
      }
    };

    const handleNumbers = () => {
      value.currentStatement += text;
      value.value += text;
    };

    const allClear = () => {
      value = {
        value: "",
        currentStatement: "",
        operator: "",
        result: null,
        isFinished: false,
      };
    };

    const backSpace = () => {
      if (!value.currentStatement && value.operator) {
        value.value = value.value.slice(0, value.value.length - 1);
        value.operator = value.prevOperator;
      } else {
        if (value.value === value.currentStatement) {
          allClear();
        } else {
          value.value = value.value.slice(
            0,
            value.value.lastIndexOf(value.operator) + 1
          );

          value.currentStatement = "";
        }
      }
    };

    // handle input:
    if (value.isFinished) {
      allClear();
    }

    // numbers (0 - 9)
    if (10 - text <= 10) {
      handleNumbers();
    } else {
      // other functionalities:
      switch (text) {
        case "AC":
          allClear();
          break;

        case "<=":
          backSpace();
          break;

        case "=":
          handleOperators();
          value.isFinished = true;
          break;

        default:
          handleOperators();
          if (value.currentStatement || value.result) {
            value.value += text;
            value.operator = text;
            value.currentStatement = "";
          }
      }
    }

    setDisplayValue(value);
  };

  return (
    <button className="buttons" onClick={() => handleSetDisplayValue()}>
      {text}
    </button>
  );
};

export default Buttons;
