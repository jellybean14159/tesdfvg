var tijd = 0;

function setup() {
  var myCanvas = createCanvas(500,500);
  myCanvas.parent('processing');
  //noLoop();
}

function draw() {
  background('skyBlue');
  text("tijd="+tijd,25,25);
  tekenStoplicht();
}

function tekenStoplicht() {
  fill('grey');
  translate(175,50);
  rect(0,0,150,400);
  
  if (mouseIsPressed == false) {
    tijd++;
    if (tijd < 200) {
      fill('green');
      ellipse(75,330,100);
    }
    
    if (tijd > 200 && tijd < 300) {
      fill('orange');
      ellipse(75,190,100);
    }
    
    if (tijd > 300 && tijd < 700) {
      fill('red');
      ellipse(75,75,100);
    }
    
    if (tijd > 700) {
      tijd=tijd-tijd;
    }
  }
}
