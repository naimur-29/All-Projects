// set canvas
const canvas = document.querySelector(".canvas1");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.globalCompositeOperation = "destination-over";
// context.globalCompositeOperation='source-over | copy | destination-in | destination-out | destination-over | lighter | source-atop | source-in | source-out | xor';

// define variables
let num = 0;
let scale = 10;
let magic = Math.random() * 100 + 1;

// define functions
function drawFlower() {
  let angle = num * magic;
  let radius = scale * Math.sqrt(num);
  let positionX = radius * Math.sin(angle) + canvas.width / 2;
  let positionY = radius * Math.cos(angle) + canvas.height / 2;

  ctx.fillStyle = "cyan";
  ctx.strokeStyle = "blue";
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.arc(positionX, positionY, 8, 0, Math.PI * 2);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  num++;
}

// Animation
function animate() {
  // update display
  //   ctx.clearRect(0, 0, canvas.width, canvas.height);

  drawFlower();
  //   if (num > 100) return;

  requestAnimationFrame(animate);
}

animate();
