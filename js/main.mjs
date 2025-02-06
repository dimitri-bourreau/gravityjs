import Circle from "./classes/circle.class.mjs";
import Obstacle from "./classes/obstacle.class.mjs";

const circle = new Circle(document);
circle.initiateMovement();

const obstacle = new Obstacle();
obstacle.buildObstacle(document);
