  function setup() {
  var myCanvas = createCanvas(450,450);
  myCanvas.parent('processing');
  textFont("Verdana");
  textSize(14);
  noStroke();
  //noLoop();
  background('lavender');
  frameRate(500);
}

function draw() {
  R = random(0,255);
  G = random(0,255);
  B = random(0,255);
  fill('wheat');
  rect(0,0,450,30);
  //background('lavender');
  fill('black');
  text("mouseX:"+round(mouseX)+" mouseY:"+round(mouseY),10,20);
  fill(R,G,B);
    if (keyIsPressed == true) {
    ellipse(mouseX,mouseY,10);
  }
}

