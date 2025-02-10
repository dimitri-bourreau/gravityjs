export default class Obstacle {
  div = undefined;
  mouse = undefined;
  circle = undefined;
  x = undefined;
  y = undefined;

  constructor(circle, mouse) {
    this.circle = circle;
    this.mouse = mouse;
  }

  buildObstacle(document) {
    const [x, y] = this.getRandomPosition();
    const radius = this.getRandomRadius();
    const size = this.getRandomSize();
    const div = this.createDiv({ document, x, y, radius, size });
    this.drawObstacleOn(div);
    this.div = div;
    this.x = x;
    this.y = y;
    this.shapeShadow(div);
  }

  createDiv({ document, x, y, radius, size }) {
    const div = document.createElement("div");
    div.style.width = `${size}px`;
    div.style.height = div.style.width;
    div.style.borderRadius = `${radius}%`;
    div.style.top = `${x}px`;
    div.style.left = `${y}px`;
    div.className = "obstacle";
    div.innerHTML = `<div class="shadow-ref" style="height:${size}px"></div>`;
    return div;
  }

  drawObstacleOn(div) {
    document.body.appendChild(div);
  }

  shapeShadow(div) {
    setInterval(() => {
      div.style.setProperty("--circle-y", `${this.y - this.mouse.y}px`);
      div.style.setProperty("--circle-x", `${this.x - this.mouse.x}px`);
    }, 10);
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
