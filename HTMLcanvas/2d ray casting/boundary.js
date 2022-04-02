class Boundary {
  constructor(x1, y1, x2, y2, color = 255) {
    this.a = createVector(x1, y1);
    this.b = createVector(x2, y2);
    this.strokeColor = color;
  }

  draw() {
    stroke(this.strokeColor);
    strokeWeight(10);
    line(this.a.x, this.a.y, this.b.x, this.b.y);
    strokeWeight(10);
  }
}
