function setup() {
  var myCanvas = createCanvas(451,451);
  myCanvas.parent('processing');
  background('coral');
  fill('white');
}

function draw() {
  for (rij=0;rij<450;rij+=50) {
    for (kolom=0;kolom<450;kolom+=50) {
      if (rij==150 && kolom==300) {
        fill('orange');
      }
      else {
        fill('white');
      }
      rect(kolom,rij,50,50);
    }
  }
}