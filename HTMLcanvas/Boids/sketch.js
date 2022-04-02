const flockOfBoids = [];
const numOfBoids = 99;

let alignSlider, cohesionSlider, separationSlider;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight - 100);

  alignSlider = createSlider(0, 5, 1, 0.1);
  cohesionSlider = createSlider(0, 5, 0.5, 0.1);
  separationSlider = createSlider(0, 5, 1, 0.1);

  for (let i = 0; i < numOfBoids; i++) flockOfBoids.push(new Boid());
  flockOfBoids.push(new Boid([255, 0, 0]));
}

function draw() {
  background(0, 0, 0, 50);

  for (const boid of flockOfBoids) {
    boid.edgesCollision();
    boid.flock(flockOfBoids);
    boid.update();
    boid.draw();
  }
}

window.addEventListener("resize", () => {
  window.location.reload();
});
