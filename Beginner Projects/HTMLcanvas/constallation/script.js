const canvas = document.querySelector(".canvas1");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.fillStyle = "white";
ctx.strokeStyle = "white";
const particleArr = [];

const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
gradient.addColorStop(0, "cyan");
gradient.addColorStop(0.34, "blue");
gradient.addColorStop(0.67, "lime");

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
  for (i = 0; i < 5; i++) {
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

    // this.speedX = Math.random() * 2 - 1;
    // this.speedY = Math.random() * 2 - 1;
  }
  update() {
    this.x += this.speedX;
    this.y += this.speedY;

    // this.x += (10 - this.speedX) * this.size;
    // this.y += (10 - this.speedY) * this.speedY;

    // this.x += this.speedX * this.size * (this.y / this.x);
    // this.y += this.speedX * this.size * (this.x / this.y);

    // this.x += Math.sign(this.speedX) * 3;
    // this.y += Math.sign(this.speedY) * 3;

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
  for (let i = 0; i < particleArr.length; i++) {
    particleArr[i].draw();
    particleArr[i].update();

    for (let j = i; j < particleArr.length; j++) {
      const dx = particleArr[i].x - particleArr[j].x;
      const dy = particleArr[i].y - particleArr[j].y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      // distance > 100 && distance < 105 && particleArr[i].size < 2

      if (distance > 100 && distance < 105) {
        ctx.strokeStyle = gradient;
        ctx.lineWidth = particleArr[i].size / 5;
        ctx.beginPath();

        ctx.moveTo(particleArr[i].x, particleArr[i].y);
        ctx.lineTo(particleArr[j].x, particleArr[j].y);

        // ctx.arc(
        //   (particleArr[i].x + particleArr[j].x) / 2,
        //   (particleArr[i].y + particleArr[j].y) / 2,
        //   distance / 3,
        //   0,
        //   Math.PI * 2
        // );

        // ctx.strokeRect(particleArr[i].x, particleArr[i].y, distance, distance);
        ctx.stroke();
      }
    }
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  //   ctx.fillStyle = "rgba(0, 0, 0, 0.02)";
  //   ctx.fillRect(0, 0, canvas.width, canvas.height);

  particleActions();

  requestAnimationFrame(animate);
}
animate();
