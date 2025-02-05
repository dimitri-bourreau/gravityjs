const STARTING_DIV_ID = "start";

const startingDiv = getStartingDiv(STARTING_DIV_ID);

setInterval(() => {
  const currentTranslation = startingDiv.style.transform;
  if (!currentTranslation) startingDiv.style.transform = "translateX(10px)";
  else {
    const numberOfPixelsAsString = currentTranslation
      .replace("translateX(", "")
      .replace(")", "");
    const numberOfPixels = parseInt(numberOfPixelsAsString);
    startingDiv.style.transform = `translateX(${numberOfPixels + 10}px)`;
  }
}, 100);

function getStartingDiv(id) {
  const div = document.getElementById(id);
  console.log(document);
  if (!div) throw new Error("Impossible de récupérer la div");
  return div;
}
