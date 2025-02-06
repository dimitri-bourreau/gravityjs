export default class Mouse {
  x = 0;
  y = 0;

  constructor(document) {
    this.listenToMouseMovements(document);
  }

  listenToMouseMovements(document) {
    document.addEventListener("mousemove", (event) => {
      this.x = event.clientX;
      this.y = event.clientY;
    });
  }
}
