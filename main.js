const STARTING_DIV_ID = "start";

const startingDiv = getStartingDiv(STARTING_DIV_ID);

function getStartingDiv(id) {
  const div = document.getElementById(id);
  if (!div) throw new Error("Impossible de récupérer la div");
  return div;
}
