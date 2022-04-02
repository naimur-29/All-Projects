let walls = [];
let particle;

window.addEventListener("resize", () => {
  window.location.reload();
});

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  for (let i = 0; i < 4; i++) {
    const x1 = random(width);
    const x2 = random(width / 1.5);
    const y1 = random(height);
    const y2 = random(height / 1.5);

    walls.push(new Boundary(x1, x2, y1, y2));
  }
  walls.push(new Boundary(0, 0, width, 0, 0));
  walls.push(new Boundary(0, 0, 0, height, 0));
  walls.push(new Boundary(width, 0, width, height, 0));
  walls.push(new Boundary(0, height, width, height, 0));

  particle = new Particle();
}

function draw() {
  background(0);

  for (const wall of walls) wall.draw();

  particle.update(mouseX, mouseY);
  particle.draw();
  particle.look(walls);
}
