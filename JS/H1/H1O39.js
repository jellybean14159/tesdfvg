var diameter = 400;
var aantal = 0;

function setup() {
    var myCanvas = createCanvas(1000,500);
    myCanvas.parent('processing');
    noLoop();
    background('white');
    noFill();
    strokeWeight(2);
    stroke('black');
    textSize(50);
}

function draw() {
    tekenCirkel(width/2,height/2,diameter);
    text("N = "+aantal,10,50);
}

function tekenCirkel(x,y,D) {
    ellipse(x,y,D);
    aantal++;
    if (D>5) {
        tekenCirkel(x+0.5*D,y,D*0.5);
        
    }
}