// SETTING UP THE CANVAS
const mainCanvas = document.querySelector(".main-canvas");
const ctxMain = mainCanvas.getContext("2d");

mainCanvas.width = window.innerWidth;
mainCanvas.height = window.innerHeight;

window.addEventListener("resize", () => {
  mainCanvas.width = window.innerWidth;
  mainCanvas.height = window.innerHeight;
});
console.log(window.innerWidth, window.innerHeight);

// GLOBAL VARIABLES ClASSES FUNCTIONS
const impacts = [];

class ImpactParticle {
  constructor() {
    this.x = mouse.x;
    this.y = mouse.y;
    this.size = 1;
    this.speed = 18;
    // this.color = "#f00";
    this.opacity = 0.1;
    this.color = `rgba(0, 255, 255, ${this.opacity})`;
  }

  draw() {
    ctxMain.strokeStyle = this.color;
    ctxMain.lineWidth = 50;
    ctxMain.beginPath();
    ctxMain.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctxMain.stroke();
    ctxMain.closePath();
  }

  update() {
    this.size += this.speed;
    this.opacity += 0.01;
    this.color = `rgba(0, 255, 255, ${this.opacity})`;
  }
}

function updateImpactParticles() {
  for (let i = 0; i < impacts.length; i++) {
    impacts[i].draw();
    impacts[i].update();

    // REMOVE IMPACT
    if (impacts[i].size >= 2000) {
      impacts.splice(i, 1);
      i--;
    }
  }
}

// MOUSE POSITION
const mouse = {
  x: null,
  y: null,
};

window.addEventListener("mousemove", (event) => {
  mouse.x = event.x;
  mouse.y = event.y;
});

////////
//MAIN//
////////

window.addEventListener("click", () => {
  impacts.push(new ImpactParticle());
});

function animate() {
  ctxMain.fillStyle = "rgba(255, 255, 255, 0.05)";
  ctxMain.fillRect(0, 0, mainCanvas.width, mainCanvas.height);

  updateImpactParticles();

  requestAnimationFrame(animate);
}
animate();
