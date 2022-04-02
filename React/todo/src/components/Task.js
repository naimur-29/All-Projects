import React, { useState } from "react";
import { Alert, Checkbox } from "@mui/material";

import "./Task.css";

const Task = (props) => {
  const [taskConfig, setTaskConfig] = useState({ severity: props.config });

  const handleTaskConfig = () => {
    if (taskConfig.severity !== "error")
      setTaskConfig({
        severity: taskConfig.severity === "info" ? "success" : "info",
      });
  };

  return (
    <Alert
      severity={taskConfig.severity}
      style={{
        width: "100%",
        marginBottom: "10px",
        boxShadow: "0 1px 5px rgba(0, 0, 0, 0.2)",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div>{props.text}</div>
        <Checkbox color="success" onChange={handleTaskConfig} />
      </div>
    </Alert>
  );
};

export default Task;
