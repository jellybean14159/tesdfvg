var R = 5;
var G = 5;
var B = 5;

function setup() {
  var myCanvas = createCanvas(1000,500);
  myCanvas.parent('processing');
  noLoop();
  noStroke();
}

function draw() {
  bground();
}

function bground() {
  //text("R = "+R+", G = "+G+" en B = "+B,100,100);
  
  for (l=0;l<50;l++) {
    R=R+5;
    fill(R,G,B);
    rect(0,0,3,400);
    translate(3,0);
  }
  
  if (R==255) {
    for (l=0;l<50;l++) {
      G=G+5;
      fill(R,G,B);
      rect(0,0,3,400);
      translate(3,0);
    }
  }
  
  if (R==255 && G==255) {
    for (l=0;l<50;l++) {
      R=R-5;
      fill(R,G,B);
      rect(0,0,3,400);
      translate(3,0);
    }
  }
  
  if (G==255) {
    for (l=0;l<50;l++) {
      B=B+5;
      fill(R,G,B);
      rect(0,0,3,400);
      translate(3,0);
    }
  }
  
  if (G==255 && B==255) {
    for (l=0;l<50;l++) {
      G=G-5;
      fill(R,G,B);
      rect(0,0,3,400);
      translate(3,0);
    }
  }
  
  if (B==255) {
    for (l=0;l<50;l++) {
      R=R+5;
      fill(R,G,B);
      rect(0,0,3,400);
      translate(3,0);
    }
  }
  
  if (B==255 && R==255) {
    for (l=0;l<50;l++) {
      B=B-5;
      R=R-5;
      fill(R,G,B);
      rect(0,0,3,400);
      translate(3,0);
    }
  }
  
  
  text("R = "+R+", G = "+G+" en B = "+B,100,500);
}