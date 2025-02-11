export default class Mouse {
  x = 0;
  y = 0;

  constructor() {
    this.listenToMouseMovements();
  }

  listenToMouseMovements() {
    document.addEventListener("mousemove", (event) => {
      this.x = event.clientX;
      this.y = event.clientY;
    });
  }
}
