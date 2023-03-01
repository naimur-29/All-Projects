const LIFESPAN = 1000;
const SIZE = 500;

let target;
let obstacle;
let FRAME = 1;
let population;

function setup() {
  createCanvas(600, 600);

  population = new Population(SIZE);
  population.generate();
  target = createVector(width / 2, 50);
  obstacle = [0, height - 300, 550, 10];
}

function draw() {
  background(51, 200);
  noStroke();

  for (let i = 0; i < 5; i++) {
    fill(0, 255, 0, 50);
    ellipse(target.x, target.y, 20, 20);
    fill(255, 0, 0, 50);
    rect(...obstacle);

    FRAME++;
    if (FRAME >= LIFESPAN) {
      FRAME = 1;
      population.evaluate();
      population.generate(population.selection());
    }

    population.launch();
  }
}
