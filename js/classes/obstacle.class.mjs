export default class Obstacle {
  div = undefined;

  constructor() {}

  buildObstacle(document) {
    const [x, y] = this.getRandomPosition();
    const radius = this.getRandomRadius();
    const size = this.getRandomSize();
    const div = this.createDiv({ document, x, y, radius, size });
    this.drawObstacleOn(div);
  }

  createDiv({ document, x, y, radius, size }) {
    const div = document.createElement("div");
    div.style.width = `${size}px`;
    div.style.height = div.style.width;
    div.style.borderRadius = radius;
    div.style.display = "absolute";
    div.style.top = x;
    div.style.left = y;
    div.style.backgroundColor = "gold";
    div.style.border = "1px solid maroon";
    return div;
  }

  drawObstacleOn(div) {
    document.body.appendChild(div);
  }

  getRandomPosition() {
    return [50, 134];
  }

  getRandomRadius() {
    return 53;
  }

  getRandomSize() {
    return 56;
  }
}
