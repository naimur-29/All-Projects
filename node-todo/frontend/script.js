const todoContainer = document.querySelector(".todo-list");

const getTodoList = async () => {
  todoContainer.innerHTML = "";
  let newList = [];

  await fetch("http://localhost:5000/todo/get")
    .then((response) => response.json())
    .then((data) => (newList = data))
    .catch((err) => console.log(err));

  for (let newTodo of newList) {
    let child = document.createElement("li");
    child.textContent = newTodo.text;
    let grandchild = document.createElement("input");

    grandchild.setAttribute("type", "checkbox");
    grandchild.checked = newTodo.state;

    child.appendChild(grandchild);
    todoContainer.appendChild(child);
  }
};

const refresh = async () => {
  await getTodoList();
};

refresh();
