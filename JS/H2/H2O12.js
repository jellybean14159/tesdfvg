var animatie = [];
var aantalBeeldjes = 6;
var nummer=5;

function preload() {
  for (b=0;b<aantalBeeldjes;b++) {
    nieuw_beeldje = loadImage("images/sprites/Jos_losse_beeldjes/Jos-"+b+".png");
    animatie.push(nieuw_beeldje);
  }
}

function setup() {
  var myCanvas = createCanvas(460,460);
  myCanvas.parent('processing');
  noStroke();
  frameRate(50);
}

function draw() {
  background('lavender');
  background('white');
  image(animatie[nummer],0,0);
  
  if (mouseX<140) {
    nummer=3;
  }
  
  else if (mouseX>320) {
    nummer=4;
  }

  else if (mouseY>320) {
    nummer=0;
  }
  
  else if (mouseY<140) {
    nummer=1;
  }
  
  else {
    nummer=2;
  }
  
  // straal van de neus is 180

}