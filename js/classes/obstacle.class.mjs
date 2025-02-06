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
    div.style.borderRadius = `${radius}%`;
    div.style.position = "absolute";
    div.style.top = `${x}px`;
    div.style.left = `${y}px`;
    div.style.backgroundColor = "lightblue";
    div.style.border = "1px solid maroon";
    return div;
  }

  drawObstacleOn(div) {
    document.body.appendChild(div);
  }

  getRandomPosition() {
    return [200, 200];
  }

  getRandomRadius() {
    return 87;
  }

  getRandomSize() {
    return 56;
  }
}
