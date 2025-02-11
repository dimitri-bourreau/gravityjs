import Obstacle from "./classes/obstacle.class.mjs";
import Mouse from "./classes/mouse.class.mjs";
import LightSource from "./classes/light-source.class.mjs";

const mouse = new Mouse(document);

const lightSource = new LightSource(document, mouse);
lightSource.initiateMovement();

[...new Array(20)].map(() =>
  new Obstacle(document, lightSource, mouse).followLightSource()
);
