const canvas01 = document.querySelector(".canvas-01");
const ctx01 = canvas01.getContext("2d");

canvas01.width = 600;
canvas01.height = 600;

const snake = new Snake();
const frameRate = 3;
let snakeTime = 0;

function initiate() {
  snakeTime++;
  ctx01.fillStyle = "rgba(30, 30, 30, 0.2)";
  ctx01.fillRect(0, 0, canvas01.width, canvas01.height);

  snake.initiate();

  requestAnimationFrame(initiate);
}
initiate();
