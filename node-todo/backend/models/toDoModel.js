const mongoose = require("mongoose");

const toDoSchema = new mongoose.Schema({
  text: {
    type: String,
    require: true,
  },
  state: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("ToDo", toDoSchema);
