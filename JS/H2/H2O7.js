var vierkanten = new Array(23,18,11);
var namen = new Array("August","Tinus","Colette");

function setup() {
  var myCanvas = createCanvas(850,220);
  myCanvas.parent('processing');
  background('orange');
  textFont("Georgia");
  textSize(40);
  noStroke();
  vierkanten.push(30);
  namen.push("Jelte");
  namen.sort();
  vierkanten.shift();
  noLoop();
}

function draw() {
  for (teller=0;teller<vierkanten.length;teller++) {
    fill('white');
    text(vierkanten[teller],20,48*(teller+1));
    text("omtrek = "+4*vierkanten[teller],130,48*(teller+1));
    text("opp = "+vierkanten[teller]*vierkanten[teller],400,48*(teller+1));
    fill('dodgerblue');
    rect(90,48*(teller)+25,vierkanten[teller],vierkanten[teller]);
  }
  
  for (n=0;n<namen.length;n++) {
    fill('black');
    text(namen[n],650,48*(n+1));
  }
}