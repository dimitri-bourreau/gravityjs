class Circle {
  div = undefined;
  mouse = undefined;
  pxSize = 20;
  x = 0;
  y = 0;

  constructor(document) {
    this.div = document.getElementById("start");
    this.mouse = new Mouse(document);
    this.updateSize();
    const [x, y] = this.getDivPosition();
    this.x = x;
    this.y = y;
  }

  getDistancesFromCircleToMouse() {
    return [this.mouse.x - this.x, this.mouse.y - this.y];
  }

  getDivPosition() {
    const divRectangle = this.div.getBoundingClientRect();
    return [
      divRectangle.left + Math.floor(this.pxSize / 2),
      divRectangle.top + Math.floor(this.pxSize / 2),
    ];
  }

  getNextPosition() {
    const distances = this.getDistancesFromCircleToMouse();
    return [
      Math.floor(distances[0]) - this.x,
      Math.floor(distances[1]) - this.y,
    ];
  }

  initiateMovement() {
    setInterval(() => {
      const nextPosition = this.getNextPosition();
      this.updateSize();
      this.moveTo(nextPosition);
    }, 10);
  }

  moveTo(nextPosition) {
    this.div.style.transform = `translate(${this.x + nextPosition[0]}px,${
      this.y + nextPosition[1]
    }px)`;
  }

  updateSize() {
    this.div.style.width = `${this.pxSize}px`;
    this.div.style.height = `${this.pxSize}px`;
  }
}

class Mouse {
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

// ------------------------------------------------------------------------------

const circle = new Circle(document);
circle.initiateMovement();
