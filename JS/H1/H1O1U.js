function setup() {
  var myCanvas = createCanvas(450,450);
  myCanvas.parent('processing');
}

function draw() {
  for (rij=0;rij<450;rij+50) {
    for (kolom=0;kolom<450;kolom+50) {
      rect(kolom,rij,50);
    }
  }
}
