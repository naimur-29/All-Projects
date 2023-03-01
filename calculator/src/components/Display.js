import React from "react";

const Display = ({ displayValue }) => {
  return (
    <div className="display">
      <span>{displayValue.value}</span>
      {displayValue.isFinished ? (
        <span>
          {Number.isInteger(displayValue.result)
            ? displayValue.result
            : displayValue.result.toFixed(3)}
        </span>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Display;
