var aantal=5;

function setup() {
  var myCanvas = createCanvas(450,450);
  myCanvas.parent('processing');
  frameRate(10);
  colorMode(RGB, 255, 255, 255, 1);
  angleMode(DEGREES);
  rectMode(CENTER);
  noStroke();
}

function draw() {
  background('lavender');
  fill('black');
  text("aantal = "+aantal,10,20);    
  translate(225,225);
  fill(178, 34, 34,.7);
  for (n=0;n<aantal;n++) {
    ellipse(0,0,400,50);
    rotate(360/aantal);
  }
  fill(255, 195, 0,.5);
  for (n=0;n<aantal;n++) {
    rect(0,0,75,75)
    rotate(360/aantal);
  }
  if (keyIsDown(LEFT_ARROW) && aantal>=2) {
    aantal--;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    aantal++;
  }   
}

