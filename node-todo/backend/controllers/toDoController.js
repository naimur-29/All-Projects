const toDoModel = require("../models/toDoModel");

// get all todos:
module.exports.getToDo = async (req, res) => {
  const toDo = await toDoModel.find();

  res.send(toDo);
};

// create new todo:
module.exports.saveToDo = async (req, res) => {
  const { text } = req.body;

  toDoModel.create({ text }).then((data) => {
    console.log("added new todo...");
    console.log(data);

    res.send(data);
  });
};

// update a todo:
module.exports.updateToDo = async (req, res) => {
  const { _id, text, state } = req.body;
  const pkg =
    text && state ? { text, state } : text ? { text } : state ? { state } : {};

  toDoModel
    .findByIdAndUpdate(_id, pkg)
    .then(() => res.send("updated successfully..."))
    .catch((err) => console.log(err));
};

module.exports.deleteToDo = async (req, res) => {
  const { _id } = req.body;

  toDoModel
    .findByIdAndDelete(_id)
    .then(() => res.send("deleted successfully..."))
    .catch((err) => console.log(err));
};
