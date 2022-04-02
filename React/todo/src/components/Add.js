import React from "react";
import { Button } from "@mui/material";

const Add = (props) => {
  return (
    <>
      <Button
        variant="outlined"
        size="large"
        className="add_btn"
        onClick={props.add}
        style={{
          margin: "10px 0",
          width: "100%",
          boxShadow: "0 3px 10px rgba(0, 0, 0, 0.2)",
        }}
      >
        Add a target
      </Button>
      {props.taskLength ? (
        <Button
          variant="contained"
          size="large"
          className="add_btn"
          onClick={props.clear}
          style={{
            width: "100%",
            boxShadow: "0 3px 5px rgba(0, 0, 0, 0.2)",
          }}
        >
          Clear All
        </Button>
      ) : (
        <></>
      )}
    </>
  );
};

export default Add;
