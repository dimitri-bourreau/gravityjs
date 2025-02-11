import Circle from "./classes/circle.class.mjs";
import Obstacle from "./classes/obstacle.class.mjs";
import Mouse from "./classes/mouse.class.mjs";

const mouse = new Mouse(document);

const circle = new Circle(document, mouse);
circle.initiateMovement();

const obstacle = new Obstacle(document, circle, mouse);
obstacle.followLightSource();
