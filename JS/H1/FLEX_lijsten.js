function setup() {
  var myCanvas = createCanvas(600,600);
  myCanvas.parent('processing');
  noStroke();
  noLoop();
  background('darkblue');
  textSize(30);
  textFont("Monospace");
  textAlign(RIGHT,CENTER);
  strokeWeight(10);
}

var lengtes = new Array(400,500,200,100);
var breedtes = new Array(300,500,200,400);
var kleuren = new Array('orange','indianred','dodgerblue','white');

function draw() {
  fill('white');
  text("lengtes: "+lengtes,0,10,width-30,40);
  text("breedtes: "+breedtes,0,40,width-30,40);
  noFill();
  translate(50,100);
  
  for (v=0;v<lengtes.length;v++) {
    stroke(kleuren[v]);
    rect(0,0,lengtes[v],breedtes[v]);
  }
}