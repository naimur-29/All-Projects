class Particle {
  constructor() {
    this.pos = createVector(width / 2, height / 2);
    this.rays = [];
    for (let a = 0; a < 360; a++) this.rays.push(new Ray(this.pos, radians(a)));
  }

  update(x, y) {
    this.pos.set(x, y);
  }

  look(walls) {
    for (const ray of this.rays) {
      let closest = null;
      let record = Infinity;

      for (const wall of walls) {
        const point = ray.cast(wall);

        if (point) {
          const distance = p5.Vector.dist(this.pos, point);

          if (distance < record) {
            record = distance;
            closest = point;
          }
        }
      }
      if (closest) {
        stroke(255, 20);
        line(this.pos.x, this.pos.y, closest.x, closest.y);
      }
    }
  }

  draw() {
    fill(255);
    ellipse(this.pos.x, this.pos.y, 16);
    for (const ray of this.rays) ray.draw();
  }
}
