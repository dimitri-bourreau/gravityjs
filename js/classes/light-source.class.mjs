export default class LightSource {
  mouse = undefined;
  size = 1500;

  constructor(mouse) {
    this.mouse = mouse;
  }

  getDivPosition() {
    const divRectangle = this.div.getBoundingClientRect();
    return [
      divRectangle.left + Math.floor(this.pxSize / 2),
      divRectangle.top + Math.floor(this.pxSize / 2),
    ];
  }

  initiateMovement() {
    setInterval(() => {
      document.body.style.setProperty("--light-size", `${this.size}px`);
      this.moveTo({ x: this.mouse.x, y: this.mouse.y });
    }, 10);
  }

  moveTo({ x, y }) {
    document.body.style.setProperty("--mouseY", `${y - this.size / 2}px`);
    document.body.style.setProperty("--mouseX", `${x - this.size / 2}px`);
  }
}
