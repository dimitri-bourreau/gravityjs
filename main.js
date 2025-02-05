class Circle {
  div = undefined;
  mouse = undefined;
  pxSize = 20;
  x = 0;
  y = 0;

  constructor(document) {
    this.div = document.getElementById("start");
    this.mouse = new Mouse(document);
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

  initiateMovement() {
    setInterval(() => {
      this.moveDivTowardsMouse(this.mouse);
    }, 10);
  }

  moveDivTowardsMouse(mouse) {
    const distances = this.getDistancesFromCircleToMouse();
    console.log(distances);
  }

  moveDivTo(div, position) {
    const currentTranslation = div.style.transform;
    if (!currentTranslation) div.style.transform = "translateX(10px)";
    else {
      const numberOfPixels = getNumberFromTranslateX(currentTranslation);
      div.style.transform = setTranslateFromNumber(numberOfPixels + 1);
    }

    function getNumberFromTranslateX(translate) {
      return parseInt(translate.replace("translateX(", "").replace(")", ""));
    }

    function setTranslateFromNumber(n) {
      return `translateX(${n}px)`;
    }
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
