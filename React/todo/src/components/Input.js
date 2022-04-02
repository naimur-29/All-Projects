import React, { useState } from "react";
import TextField from "@mui/material/TextField";

const Input = (props) => {
  const [input, setInput] = useState("");

  return (
    <TextField
      id="outlined-textarea"
      label="Target Name🎯"
      placeholder="Create new"
      multiline
      style={{ width: "100%", marginTop: "10px" }}
      onChange={props.getData}
    />
  );
};

export default Input;
