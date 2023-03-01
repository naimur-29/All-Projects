class Rocket {
  constructor(dna = undefined) {
    this.pos = createVector(width / 2, height);
    this.vel = createVector();
    this.acc = createVector();
    if (dna) {
      this.dna = dna;
    } else {
      this.dna = new DNA();
    }
    this.fitness;
    this.hitTarget;
    this.dead;
  }

  update() {
    if (this.pos.dist(target) < 10) {
      this.hitTarget = true;
    }

    if (
      (this.pos.x > obstacle[0] &&
        this.pos.x < obstacle[0] + obstacle[2] &&
        this.pos.y > obstacle[1] &&
        this.pos.y < obstacle[1] + obstacle[3]) ||
      this.pos.x < 10 ||
      this.pos.x > 590
    ) {
      this.dead = true;
    }

    this.applyForce(this.dna.genes[FRAME - 1]);

    if (!this.hitTarget && !this.dead) {
      this.vel.add(this.acc);
      this.pos.add(this.vel);
      this.acc.mult(0);
    }
  }

  applyForce(force) {
    this.acc.add(force);
  }

  calcFitness() {
    this.fitness = map(this.pos.dist(target), 0, height, height, 0);

    if (this.hitTarget) {
      this.fitness *= 10 * (FRAME / LIFESPAN);
      //   this.fitness *= 10;
    }

    if (!this.dead) {
      this.fitness *= 1.1;
    }

    return this.fitness;
  }

  draw() {
    push();
    translate(this.pos.x, this.pos.y);
    // heading gives the angle of the vector facing towards
    rotate(this.vel.heading());
    rectMode(CENTER);

    noStroke();
    fill(255, 100);
    rect(0, 0, 25, 5);
    // pop makes it so translating & rotating doesn't affect other elements
    pop();
  }
}

class Population {
  constructor(size) {
    this.size = size;
    this.rockets = [];
    this.matingPool = [];
  }

  generate(population = []) {
    if (population.length) {
      this.rockets = population;
    } else {
      for (let i = 0; i < this.size; i++) {
        this.rockets[i] = new Rocket();
      }
    }
  }

  evaluate() {
    let maxFitness = 0;
    for (let i = 0; i < this.size; i++) {
      if (this.rockets[i].calcFitness() > maxFitness) {
        maxFitness = this.rockets[i].fitness;
      }
    }

    for (let i = 0; i < this.size; i++) {
      this.rockets[i].fitness /= maxFitness;
    }
    console.log(maxFitness);

    this.matingPool = [];
    for (let i = 0; i < this.size; i++) {
      let n = this.rockets[i].fitness * 100;
      for (let j = 0; j < n; j++) {
        this.matingPool[j] = this.rockets[i];
      }
    }
  }

  selection() {
    let newPopulation = [];

    for (let i = 0; i < SIZE; i++) {
      let parentA = random(this.matingPool);
      let parentB = random(this.matingPool);
      let child = parentA.dna.crossover(parentB.dna);
      newPopulation[i] = new Rocket(child);
    }

    return newPopulation;
  }

  launch() {
    for (let i = 0; i < this.size; i++) {
      this.rockets[i].update();
      this.rockets[i].draw();
    }
  }
}
