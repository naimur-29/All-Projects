class Boid {
  constructor(color = [0, 255, 255]) {
    this.position = createVector(random(width), random(height));
    this.velocity = p5.Vector.random2D();
    this.velocity.setMag(random(2, 4));
    this.acceleration = createVector();
    this.maxForce = 1;
    this.maxSpeed = 4;
    this.color = color;
  }

  draw() {
    strokeWeight(8);
    stroke(...this.color);
    point(this.position.x, this.position.y);
  }

  update() {
    this.position.add(this.velocity);
    this.velocity.add(this.acceleration);

    this.velocity.limit(this.maxSpeed);
    this.acceleration.mult(0);
  }

  align(boids) {
    const perceptionRadius = 50;
    let total = 0;
    let steering = createVector();
    for (const boidNeighbor of boids) {
      const distance = dist(
        this.position.x,
        this.position.y,
        boidNeighbor.position.x,
        boidNeighbor.position.y
      );
      if (boidNeighbor != this && distance < perceptionRadius) {
        steering.add(boidNeighbor.velocity);
        total++;
      }
    }
    if (total > 0) {
      steering.div(total);
      steering.setMag(this.maxSpeed);
      steering.sub(this.velocity);
      steering.limit(this.maxForce);
    }
    return steering;
  }

  flock(boids) {
    const alignment = this.align(boids);
    const cohesion = this.cohesion(boids);
    const separation = this.separation(boids);

    alignment.mult(alignSlider.value());
    cohesion.mult(cohesionSlider.value());
    separation.mult(separationSlider.value());

    this.acceleration.mult(0);
    this.acceleration.add(alignment);
    this.acceleration.add(cohesion);
    this.acceleration.add(separation);
  }

  edgesCollision() {
    if (this.position.x > width) this.position.x = 0;
    else if (this.position.x < 0) this.position.x = width;

    if (this.position.y > height) this.position.y = 0;
    else if (this.position.y < 0) this.position.y = height;
  }

  cohesion(boids) {
    const perceptionRadius = 100;
    let total = 0;
    let steering = createVector();
    for (const boidNeighbor of boids) {
      const distance = dist(
        this.position.x,
        this.position.y,
        boidNeighbor.position.x,
        boidNeighbor.position.y
      );
      if (boidNeighbor != this && distance < perceptionRadius) {
        steering.add(boidNeighbor.position);
        total++;
      }
    }
    if (total > 0) {
      steering.div(total);
      steering.sub(this.position);
      steering.setMag(this.maxSpeed);
      steering.sub(this.velocity);
      steering.limit(this.maxForce);
    }
    return steering;
  }

  separation(boids) {
    const perceptionRadius = 50;
    let total = 0;
    let steering = createVector();
    for (const boidNeighbor of boids) {
      const distance = dist(
        this.position.x,
        this.position.y,
        boidNeighbor.position.x,
        boidNeighbor.position.y
      );
      if (boidNeighbor != this && distance < perceptionRadius) {
        let difference = p5.Vector.sub(this.position, boidNeighbor.position);
        difference.div(distance);
        steering.add(difference);
        total++;
      }
    }
    if (total > 0) {
      steering.div(total);
      steering.setMag(this.maxSpeed);
      steering.sub(this.velocity);
      steering.limit(this.maxForce);
    }
    return steering;
  }
}
