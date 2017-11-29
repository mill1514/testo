while (true) {
  setTimeout(updateCanvas(), 5000);
}

/* Pulls from Firebase and updates javscript canvas element */
function updateCanvas () {
  
  console.log("UPDATING");
  
  /* pull data */
  var canv = getCanvas();
  
  /* put into canvas */
  colorCanvas(canv);
}
