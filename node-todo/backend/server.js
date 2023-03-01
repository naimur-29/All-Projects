const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const toDoRoute = require("./routes/ToDoRoute");

require("dotenv").config();

const app = express();
const PORT = process.env.port || 5000;

app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log(`connected to MongoDB`))
  .catch((err) => console.log(err));

app.use(toDoRoute);

app.listen(PORT, () => console.log(`listening on port: ${PORT}`));
