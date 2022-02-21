const canvas = document.querySelector(".canvas1");
const generateButton = document.querySelector(".generate-tree-btn");
const ctx = canvas.getContext("2d");
let curve = 10;
let curve2 = 10;
let maxLen = 5;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const drawTree = (startX, startY, len, angle, branchWidth, color1, color2) => {
  ctx.beginPath();
  ctx.save();
  ctx.strokeStyle = color1;
  ctx.fillStyle = color2;
  ctx.shadowBlur = 15;
  ctx.shadowColor = "rgba(0, 0, 0, 0.5)";

  ctx.lineWidth = branchWidth;
  ctx.translate(startX, startY);
  ctx.rotate((angle * Math.PI) / 180);
  ctx.moveTo(0, 0);
  angle > 0
    ? ctx.bezierCurveTo(curve2, -len / 2, curve2, -len / 2, 0, -len)
    : ctx.bezierCurveTo(curve2, -len / 2, -curve2, -len / 2, 0, -len);

  ctx.stroke();

  if (len < maxLen) {
    ctx.beginPath();
    ctx.arc(0, -len, 10, 0, Math.PI / 2);
    ctx.fill();
    ctx.restore();
    return;
  }
  maxLen = Math.random() * 5 + 3;

  drawTree(0, -len, len * 0.75, angle + curve, branchWidth * 0.6);
  drawTree(0, -len, len * 0.75, angle - curve, branchWidth * 0.6);

  ctx.restore();
};
drawTree(canvas.width / 2, canvas.height - 80, 150, 0, 25, "brown", "green");

const generateRandomTree = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  let centerPointX = canvas.width / 2;
  let len = Math.floor(Math.random() * 20 + 150);
  let angle = 0;
  let branchWidth = Math.random() * 60 + 1;
  let color1 = `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${
    Math.random() * 255
  })`;
  let color2 = `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${
    Math.random() * 255
  })`;

  generateButton.style.background = color1;
  curve = Math.random() * 20 + 2;
  curve2 = Math.random() * 20;

  drawTree(
    centerPointX,
    canvas.height - 80,
    len,
    angle,
    branchWidth,
    color1,
    color2
  );
};

generateButton.addEventListener("click", generateRandomTree);

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  generateRandomTree();
});
