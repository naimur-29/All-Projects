class Snake {
  constructor() {
    this.scale = 20;

    this.position = {
      x: this.scale,
      y: this.scale,
    };

    this.velocity = {
      x: this.scale * 1,
      y: this.scale * 0,
    };
  }

  initiate() {
    if (snakeTime % frameRate == 0) this.update();

    ctx01.fillStyle = "#0ff";
    ctx01.fillRect(this.position.x, this.position.y, this.scale, this.scale);
  }

  update() {
    this.move();

    if (!this.checkCollision()) {
      this.position.x += this.velocity.x;
      this.position.y += this.velocity.y;
    }
  }

  changeDir([x, y]) {
    this.velocity.x = this.scale * x;
    this.velocity.y = this.scale * y;
  }

  move() {
    document.onkeydown = (event) => {
      event = event || window.event;
      const key = event.key;

      if (key == "ArrowUp") {
        this.changeDir([0, -1]);
      } else if (key == "ArrowDown") {
        this.changeDir([0, 1]);
      } else if (key == "ArrowLeft") {
        this.changeDir([-1, 0]);
      } else if (key == "ArrowRight") {
        this.changeDir([1, 0]);
      }
    };
  }

  checkApple() {}

  checkCollision() {
    if (
      this.position.x < canvas01.width - this.scale &&
      this.position.x > this.scale &&
      this.position.y < canvas01.height - this.scale &&
      this.position.y > this.scale
    )
      return false;
    else return true;
  }
}
