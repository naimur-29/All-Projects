const { Router } = require("express");
const {
  getToDo,
  saveToDo,
  updateToDo,
  deleteToDo,
} = require("../controllers/toDoController");

const router = Router();

router.get("/", (req, res) => {
  res.json({ message: "learning node by creating a simple todo app!" });
});

router.get("/todo/get", getToDo);

router.post("/todo/new", saveToDo);

router.post("/todo/update", updateToDo);

router.post("/todo/delete", deleteToDo);

module.exports = router;
