var animatie = [];
var aantalBeeldjes = 31;
var nummer = 0;
var breedte,hoogte;

function preload() {
  for (b=0;b<aantalBeeldjes;b++) {
    nieuw_beeldje = loadImage("images/sprites/wizard/opdracht_11B/frame("+b+").png");
    animatie.push(nieuw_beeldje);
  }
}

function setup() {
  var myCanvas = createCanvas(250,100);
  myCanvas.parent('processing');
  noStroke();
  frameRate(14);
  textFont("Georgia");
  textSize(18);
  breedte=animatie[0].width;
  hoogte=animatie[0].height;
}

function draw() {
  background('lavender');

  nummer = frameCount % aantalBeeldjes;
  image(animatie[nummer],150,0,2*breedte,2*hoogte);
  
  text("frameCount="+frameCount,5,40);
  text("nummer="+nummer,5,70);
}