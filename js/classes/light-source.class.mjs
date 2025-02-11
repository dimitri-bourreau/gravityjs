export default class LightSource {
  mouse = undefined;
  pxSize = 200;

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
      this.moveTo({ x: this.mouse.x, y: this.mouse.y });
    }, 10);
  }

  moveTo({ x, y }) {
    document.body.style.setProperty("--mouseY", y);
    document.body.style.setProperty("--mouseX", x);
  }
}
