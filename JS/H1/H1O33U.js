function setup() {
  var myCanvas = createCanvas(1000,450);
  myCanvas.parent('processing');
}

function draw() {
  for (rij=0;rij<450;rij+=50) {
    for (kolom=0;kolom<450;kolom+=50) {
      tekenTegel(kolom,rij,1);
    }
  }
  translate(100,0);
  tekenTegel(50,0,9);
}

function tekenTegel(x,y,s) {
  push();
  scale(s);
  translate(x,y);
  noStroke();
  fill('deepskyblue');
  triangle(0,0,25,25,25,0);
  fill('dodgerblue');
  rect(25,25,25,25);  
  fill('darkred');
  triangle(0,0,25,25,0,25);
  triangle(25,0,50,0,50,25);
  fill('rosybrown');
  triangle(0,50,25,25,25,50);
  pop();
}