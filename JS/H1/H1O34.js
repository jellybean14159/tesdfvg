var aantal = 0;
var x;
var y;
var diameter;

function setup() {
  var myCanvas = createCanvas(1000,451);
  myCanvas.parent('processing');
  frameRate(60);
  //noLoop();
  strokeWeight(4);
  stroke('steelblue')
  background('white');
  rectMode(CENTER);
  rect(500,225,1000,451);
}

function draw() {
  if (aantal>-1) {
    tekenCirkel();
    aantal++;
    fill("lightGreen");
    text("aantal = "+aantal,10,20);
  }

}

function tekenCirkel() {
  push();
  x = random(0,1000);
  y = random(0,451);
  x2 = random(0,1000);
  y2 = random(0,451);
  x3 = random(0,1000);
  y3 = random(0,451);
  //diameter = random(25,75);
  //diameter2 = random(25,75);
  R = random(0,255);
  G = random(0,255);
  B = random(0,255);
  fill(R,G,B);
  //rect(mouseX,mouseY,diameter,diameter2);
  triangle(x,y,x2,y2,x3,y3);
  pop();
}
