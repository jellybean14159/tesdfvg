var diameter = 300;
var x = 225;
var y = 225;
var y1 = 0;
var y2 = 450;

function setup() {
  var myCanvas = createCanvas(450,450);
  myCanvas.parent('processing');
  colorMode(RGB, 255, 255, 255, 1);
  noStroke();
}

function draw() {
  background(255,255,255,1);
  
  ellipse2();
  ellipse1();
  ellipse3();
  
  y1=y1+1;
  y2=y2-1;
}

function ellipse2() {
  fill(255,0,0,0.5);
  ellipse(x,y,diameter);
}

function ellipse1() {
  fill(0,255,0,0.5);
  ellipse(x,y1,diameter);
}

function ellipse3() {
  fill(0,0,255,0.5);
  ellipse(x,y2,diameter);
}