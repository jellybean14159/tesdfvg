kleur='white';

function setup() {
  var myCanvas = createCanvas(501,501);
  myCanvas.parent('processing');
  background('coral');
  noLoop();
}

function draw() {
  for (rij=0;rij<500;rij+=50) {
    for (kolom=0;kolom<500;kolom+=50) {
      fill(kleur);
      rect(kolom,rij,50,50);
      if (kleur=='white') {
        kleur='black';
      }
      else {
        kleur='white';
      }
    }
    if (kleur=='white') {
      kleur='black';
    }
    else {
      kleur='white';
    }
  }
}