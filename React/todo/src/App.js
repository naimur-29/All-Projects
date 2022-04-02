import React, { useState } from "react";
import Task from "./components/Task";
import Add from "./components/Add";
import Input from "./components/Input";

import "./App.css";
let taskData = [];

const App = () => {
  const [taskConfig, setTaskConfig] = useState("info");

  const [inputKey, setInputKey] = useState(0);

  const [input, setInput] = useState("");
  const handleInput = (element) => {
    setInput(element.target.value);
  };

  const [tasks, setTasks] = useState([]);
  const addTasks = () => {
    if (input !== "") {
      setTasks([...tasks, <Task text={input} config={taskConfig} />]);
      taskData.push(input);
    }
    setInput("");
    setInputKey(inputKey + 1);
    console.log(taskData);
  };
  const clearAll = () => {
    setTasks([]);
    setInput("");
    setInputKey(inputKey + 1);
    taskData = [];
    setTaskConfig("info");
  };

  return (
    <div className="app_container">
      <h1 className="app_heading">🎯TarGet🎯</h1>
      {tasks.map((task, index) => {
        return (
          <div key={index} style={{ width: "100%" }}>
            {task}
          </div>
        );
      })}
      <Input getData={handleInput} key={inputKey} />
      <Add add={addTasks} clear={clearAll} taskLength={tasks.length > 0} />
    </div>
  );
};

export default App;
