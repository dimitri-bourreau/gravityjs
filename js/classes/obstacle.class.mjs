export default class Obstacle {
  div = undefined;
  mouse = undefined;
  lightSource = undefined;
  x = undefined;
  y = undefined;
  size = undefined;

  constructor(lightSource, mouse) {
    this.lightSource = lightSource;
    this.mouse = mouse;
    this.buildObstacle(document);
  }

  buildObstacle(document) {
    const { x, y } = this.getRandomPosition();
    const size = this.getRandomSize();
    const div = this.createDiv({ document, x, y, size });
    this.div = div;
    this.x = x;
    this.y = y;
    this.size = size;
    document.body.appendChild(div);
  }

  createDiv({ document, x, y, size }) {
    const div = document.createElement("div");
    div.style.width = `${size}px`;
    div.style.height = div.style.width;
    div.style.borderRadius = "100%";
    div.style.top = `${x}px`;
    div.style.left = `${y}px`;
    div.className = "obstacle";
    div.innerHTML = `<div class="shadow-ref" style="height:${size}px"></div>`;
    return div;
  }

  drawShadow() {
    const { x, y, distance } = this.getDistancesFromMouse();
    const right = `${Math.floor(this.size / 2)}px`;
    const rotation = `${this.getShadowOrientation({ x, y })}deg`;
    this.div.style.setProperty("--shadow-right", right);
    this.div.style.setProperty("--shadow-rotate", rotation);
  }

  getAngleOfTriangleFromObstacleToLightSource({ x, y }) {
    return (Math.atan2(y, x) * 180) / Math.PI;
  }

  getDistancesFromMouse() {
    const x = this.mouse.x - (this.x + this.size / 2);
    const y = this.mouse.y - (this.y + this.size / 2);
    return {
      x,
      y,
      distance: Math.hypot(x, y),
    };
  }

  getRandomPosition() {
    return {
      x: Math.random() * window.screen.height,
      y: Math.random() * window.screen.width,
    };
  }

  getRandomSize() {
    return Math.random() * 300;
  }

  getShadowOrientation({ x, y }) {
    const angle = this.getAngleOfTriangleFromObstacleToLightSource({ x, y });
    return angle;
  }

  followLightSource() {
    setInterval(() => {
      this.updateObstaclePosition();
      this.drawShadow();
    }, 10);
  }

  updateObstaclePosition() {
    const { left, top } = this.div.getBoundingClientRect();
    this.x = left;
    this.y = top;
  }
}
