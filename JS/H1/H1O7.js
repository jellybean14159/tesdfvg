function setup() {
  var myCanvas = createCanvas(450,450);
  background('lavender');
  myCanvas.parent('processing');
  noLoop();
  colorMode(RGB, 255, 255, 255, 1);
  fill(178, 34, 34,.5);
}

function draw() {
  noStroke();
  translate(125,125);
  rect(0,0,200,200);
  translate(100,100);
  angleMode(DEGREES);
  rectMode(CENTER);
  rotate(45);
  rect(0,0,200,200);
  rotate(45);
  fill(225,225,0);
  rect(0,0,50,50);
  
}
