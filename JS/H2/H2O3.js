var strand;
var strandX=0;

function preload() {
  strand = loadImage("images/strand.jpg");
}

function setup() {
  var myCanvas = createCanvas(600,400);
  myCanvas.parent('processing');
}

function draw() {
  background('grey');
  
  if (strandX > -600) {
  image(strand,strandX,0);
  image(strand,strandX+strand.width,0);  
  }
  
  else {
    strandX=strandX-strandX
  }

  strandX--;
  
  text("strandX = "+strandX,10,10);
}