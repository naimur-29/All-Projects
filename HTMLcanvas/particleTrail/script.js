const canvas = document.querySelector(".canvas1");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.fillStyle = "white";
ctx.strokeStyle = "white";
const particleArr = [];

const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
gradient.addColorStop(0, "cyan");
gradient.addColorStop(0.5, "lime");
gradient.addColorStop(1, "blue");

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  ctx.fillStyle = "white";
});

// // drawing rectangle:
// ctx.fillRect(10, 10, 100, 100);

// // drawing circle:
// ctx.beginPath();
// ctx.arc(canvas.width / 2, canvas.height / 2, 100, 0, Math.PI * 2);
// // to fill the shape:
// ctx.fill();
// // to draw border:
// ctx.strokeStyle = "red";
// ctx.lineWidth = 5;
// ctx.stroke();

// // drawing the flag:
// ctx.fillStyle = "green";
// ctx.fillRect(10, 10, 300, 150);
// ctx.fillStyle = "red";
// ctx.beginPath();
// ctx.arc(160, 85, 50, 0, Math.PI * 2);
// ctx.fill();

// storing mouse properties:
const mouse = {
  x: null,
  y: null,
};

canvas.addEventListener("mousemove", (event) => {
  mouse.x = event.x;
  mouse.y = event.y;
  for (i = 0; i < 10; i++) {
    particleArr.push(new Particle());
    if (particleArr[i].size <= 1) {
      particleArr.splice(i, 1);
      i--;
    }
  }
});

class Particle {
  constructor() {
    this.x = mouse.x;
    this.y = mouse.y;
    this.size = Math.random() * 5 + 1;
    this.speedX = Math.random() * 5 - 2.5;
    this.speedY = Math.random() * 5 - 2.5;
  }
  update() {
    this.x += this.speedX;
    this.y += this.speedY;

    if (this.size > 0.2) this.size -= 0.1;
    for (i = 0; i < particleArr.length; i++) {
      if (particleArr[i].size <= 0.2) {
        particleArr.splice(i, 1);
        i--;
      }
    }
  }
  draw() {
    // ctx.fillStyle = "lime";
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

function particleActions() {
  for (const particle of particleArr) {
    particle.draw();
    particle.update();
  }
}

function animate() {
  //   ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  particleActions();

  requestAnimationFrame(animate);
}
animate();
