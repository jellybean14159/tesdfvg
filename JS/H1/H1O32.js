var R;
var G;
var B;

function setup() {
  var myCanvas = createCanvas(1000,1000);
  myCanvas.parent('processing');
  frameRate(1000);
}

function draw() {
  for (rij=0;rij<1000;rij+=1000) {
    for (kolom=0;kolom<1000;kolom+=1000) {
      R = random(0,255);
      G = random(0,255);
      B = random(0,255);
      
      fill(R,G,B);
      rect(kolom,rij,1000,1000);
    }
  }
}