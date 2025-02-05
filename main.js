const STARTING_DIV_ID = "start";

const startingDiv = getStartingDiv(STARTING_DIV_ID);

setInterval(() => {
  moveDivToRight(startingDiv);
}, 10);

function getStartingDiv(id) {
  const div = document.getElementById(id);
  if (!div) throw new Error("Impossible de récupérer la div");
  return div;
}

function moveDivToRight(startingDiv) {
  const currentTranslation = startingDiv.style.transform;
  if (!currentTranslation) startingDiv.style.transform = "translateX(10px)";
  else {
    const numberOfPixels = getNumberFromTranslateX(currentTranslation);
    startingDiv.style.transform = setTranslateFromNumber(numberOfPixels + 1);
  }
}

function getNumberFromTranslateX(translate) {
  return parseInt(translate.replace("translateX(", "").replace(")", ""));
}

function setTranslateFromNumber(n) {
  return `translateX(${n}px)`;
}
