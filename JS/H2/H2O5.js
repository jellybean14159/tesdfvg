var aantalRijenRaster = 6;
var aantalKolommenRaster = 9;
var celGrootte;

var spriteJos;
var xJos = 400;
var yJos = 300;

function preload() {
  brug = loadImage("images/dame_op_brug_1800.jpg");
  spriteJos = loadImage("images/sprites/Jos100px/Jos_0.png");
}

function setup() {
  var myCanvas = createCanvas(901,601);
  myCanvas.parent('processing');
  celGrootte = width/aantalKolommenRaster;
}

function draw() {
  image(brug,0,0,901,601);
  image(spriteJos,xJos,yJos,100,100);
  tekenRaster();
  //image(spriteJos,xJos,yJos,200,200);
}

function tekenRaster() {
  push();
  noFill();
  stroke('grey');
  /*
  Maak hieronder een dubbele herhaling om een raster te maken.
  HINT: je kunt terugkijken naar het raster dat je in H1 hebt gemaakt.
  Maak gebruik van de variabelen die bovenaan zijn gedeclareerd.
  */
  for (rij=0;rij<aantalRijenRaster;rij++) {
    for (kolom=0;kolom<aantalKolommenRaster;kolom++) {
      rect(kolom*celGrootte,rij*celGrootte,celGrootte,celGrootte);
    }
  }
  
  
  //rect(4*celGrootte,2*celGrootte,celGrootte,celGrootte);

  pop();
}