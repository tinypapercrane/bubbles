class Turtle {
  constructor(tWidth) {
    this.x = 0;
    this.y = 0;
    this.tWidth = tWidth;
  }
  move() {
    this.x += 2;
    if (this.x > width) {
      this.x = 0;
    }
  }
  show() {
    fill(255);
    stroke(this.tWidth / 10);
    rect(this.x, this.y, this.tWidth, this.tWidth);
  }
}