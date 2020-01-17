  var tS = 0;
  var t  = 0;
  
  var q  = 0;
  var w  = 0;
  var e  = 0;
  var a  = 0;
  var s  = 0;
  var d  = 0;
  var z  = 0;
  var x  = 0;
  var c  = 0;
  
  var qq  = 0;
  var ww  = 0;
  var ee  = 0;
  var aa  = 0;
  var ss  = 0;
  var dd  = 0;
  var zz  = 0;
  var xx  = 0;
  var cc  = 0;
  
  var qqq  = 0;
  var www  = 0;
  var eee  = 0;
  var aaa  = 0;
  var sss  = 0;
  var ddd  = 0;
  var zzz  = 0;
  var xxx  = 0;
  var ccc  = 0;
  
  var ii = 0;
  var oo = 0;
  var pp = 0;
  var jj = 0;
  var kk = 0;
  var ll = 0;
  var bb = 0;
  var nn = 0;
  var mm = 0;
  
  var uuuu = 0;
  var iiii = 0;
  var oooo = 0;
  var hhhh = 0;
  var jjjj = 0;
  var kkkk = 0;
  var bbbb = 0;
  var nnnn = 0;
  var mmmm = 0;
  
  var f  = 0;
  var r;

function setup() {
  var myCanvas = createCanvas(window.innerWidth,window.innerHeight);
  myCanvas.parent('processing');
  textFont("Verdana");
  frameRate(60);
}

function draw() {
  
  
  rect(0,0,window.innerWidth,30);
  text("Tijd = "+t+" seconden. Player = "+f+". Player gewonnen ="+r,10,20);
  tS+=1;
  if (tS == 60) {
    t+=1;
    tS=0
  }
  
  push();
  translate(window.innerWidth/2-225,100);
  for (rij=0;rij<450;rij+=150) {
    for (kolom=0;kolom<450;kolom+=150) {
      rect(kolom,rij,150,150);
    }
  }
  pop();
  
  push();
  translate(100,window.innerHeight/2);
  push();
  translate(0,-75);
  tekenP();
  pop();
  push();
  translate(0,75);
  tekenP2();
  pop();
  pop();
  
  push();
  translate(window.innerWidth/2-225,100);
  
  // player 1
  if (keyIsDown(81) && f==0 && ii==0)  {
    q++;
    qq++;
    ii++;
    f = 1;
  }
 
  if (q >= 1) {
    push();
    translate(75,75);
    tekenP()
    pop();
  }
  
  if (keyIsDown(87) && f==0 && oo==0)  {
    w++;
    ww++;
    oo++;
    f = 1;
  }
 
  if (w >= 1) {
    push();
    translate(225,75);
    tekenP()
    pop();
  }
  
  if (keyIsDown(69) && f==0 && pp==0)  {
    e++;
    ee++;
    pp++;
    f = 1;
  }
 
  if (e >= 1) {
    push();
    translate(375,75);
    tekenP()
    pop();
  }
  
  if (keyIsDown(65) && f==0 && jj==0)  {
    a++;
    aa++;
    jj++;
    f = 1;
  }
 
  if (a >= 1) {
    push();
    translate(75,225);
    tekenP()
    pop();
  }
  
  if (keyIsDown(83) && f==0 && kk==0)  {
    s++;
    ss++;
    kk++;
    f = 1;
  }
 
  if (s >= 1) {
    push();
    translate(225,225);
    tekenP()
    pop();
  }
  
  if (keyIsDown(68) && f==0 && ll==0)  {
    d++;
    dd++;
    ll++;
    f = 1;
  }
 
  if (d >= 1) {
    push();
    translate(375,225);
    tekenP()
    pop();
  }
  
  if (keyIsDown(90) && f==0 && bb==0)  {
    z++;
    zz++;
    bb++;
    f = 1;
  }
 
  if (z >= 1) {
    push();
    translate(75,375);
    tekenP()
    pop();
  }
  
  if (keyIsDown(88) && f==0 && nn==0)  {
    x++;
    xx++;
    nn++;
    f = 1;
  }
 
  if (x >= 1) {
    push();
    translate(225,375);
    tekenP()
    pop();
  }
  
  if (keyIsDown(67) && f==0 && mm==0)  {
    c++;
    cc++;
    mm++;
    f = 1;
  }
 
  if (c >= 1) {
    push();
    translate(375,375);
    tekenP()
    pop();
  }
  // player 2
  if (keyIsDown(85) && f==1 && ii==0) {
    uuuu++;
    qqq++;
    ii++;
    f = 0;
  }
  
  if (uuuu >= 1) {
    push();
    translate(75,75);
    tekenP2()
    pop();
  }
  
  if (keyIsDown(79) && f==1 && pp==0) {      
    oooo++;
    eee++;
    pp++;
    f = 0;
  }
  
  if (oooo >= 1) {
    push();
    translate(375,75);
    tekenP2()
    pop();
  }
  
  if (keyIsDown(66) && f==1 && bb==0) {
    bbbb++;
    zzz++;
    bb++;
    f = 0;
  }
  
  if (bbbb >= 1) {
    push();
    translate(75,375);
    tekenP2()
    pop();
  }
  
  if (keyIsDown(78) && f==1 && nn==0) {
    nnnn++;
    xxx++;
    nn++;
    f = 0;
  }
  
  if (nnnn >= 1) {
    push();
    translate(225,375);
    tekenP2()
    pop();
  }
  
  if (keyIsDown(77) && f==1 && mm==0) {
    mmmm++;
    ccc++;
    mm++;
    f = 0;
  }
  
  if (mmmm >= 1) {
    push();
    translate(375,375);
    tekenP2()
    pop();
  }
  
  if (keyIsDown(72) && f==1 && jj==0) {
    hhhh++;
    aaa++;
    jj++;
    f = 0;
  }
  
  if (hhhh >= 1) {
    push();
    translate(75,225);
    tekenP2()
    pop();
  }
  
  if (keyIsDown(74) && f==1 && kk==0) {
    jjjj++;
    sss++;
    kk++;
    f = 0;
  }
  
  if (jjjj >= 1) {
    push();
    translate(225,225);
    tekenP2()
    pop();
  }
  
  if (keyIsDown(75) && f==1 && ll==0) {
    kkkk++;
    ddd++;
    ll++;
    f = 0;
  }
  
  if (kkkk >= 1) {
    push();
    translate(375,225);
    tekenP2()
    pop();
  }
  
  if (keyIsDown(73) && f==1 && oo==0) {
    iiii++;
    www++;
    oo++;
    f = 0;
  }
  
  if (iiii >= 1) {
    push();
    translate(225,75);
    tekenP2()
    pop();
  }
  pop();
  
  push();
  if (qq>=1 && ww>=1 && ee>=1 || aa>=1 && ss>=1 && dd>=1 || zz>=1 && xx>=1 && cc>=1 || qq>=1 && aa>=1 && zz>=1 || ww>=1 && ss>=1 && xx>=1 || ee>=1 && dd>=1 && cc>=1 || qq>=1 && ss>=1 && cc>=1 || ee>=1 && ss>=1 && zz>=1) {
    text("Player 1 wint!",500,20);
    q=0; w=0; e=0; a=0; s=0; d=0; z=0; x=0; c=0; qq=0; ww=0; ee=0; aa=0; ss=0; dd=0; zz=0; xx=0; cc=0; qqq=0; www=0; eee=0; aaa=0; sss=0; ddd=0; zzz=0; xxx=0; ccc=0; ii=0; oo=0; pp=0; jj=0; kk=0; ll=0; bb=0; nn=0; mm=0; uuuu=0; iiii=0; oooo=0; hhhh=0; jjjj=0; kkkk=0; bbbb=0; nnnn=0; mmmm=0;
    f=1;
    r=0;
  }
  pop();
  push();
  if (qqq>=1 && www>=1 && eee>=1 || aaa>=1 && sss>=1 && ddd>=1 || zzz>=1 && xxx>=1 && ccc>=1 || qqq>=1 && aaa>=1 && zzz>=1 || www>=1 && sss>=1 && xxx>=1 || eee>=1 && ddd>=1 && ccc>=1 || qqq>=1 && sss>=1 && ccc>=1 || eee>=1 && sss>=1 && zzz>=1) {
    text("Player 2 wint!",500,20);
    q=0; w=0; e=0; a=0; s=0; d=0; z=0; x=0; c=0; qq=0; ww=0; ee=0; aa=0; ss=0; dd=0; zz=0; xx=0; cc=0; qqq=0; www=0; eee=0; aaa=0; sss=0; ddd=0; zzz=0; xxx=0; ccc=0; ii=0; oo=0; pp=0; jj=0; kk=0; ll=0; bb=0; nn=0; mm=0; uuuu=0; iiii=0; oooo=0; hhhh=0; jjjj=0; kkkk=0; bbbb=0; nnnn=0; mmmm=0;
    f=0;
    r=1;
  }
  pop();
  
  
}

function tekenP() {
  push();
  noStroke();
  rectMode(CENTER);
  push();
  stroke('black');
  strokeWeight(1);
  fill('darkred');
  ellipse(0,0,100);
  pop();
  fill('white');
  ellipse(-20,-20,20,25);
  ellipse(20,-20,20,25);
  push();
  rotate(PI);
  arc(0, -30, 50, 40, 0, PI, CHORD);
  pop();
  fill('black');
  ellipse(-15,-15,10,10);
  ellipse(15,-15,10,10);
  rect(0,20,45,1);
  pop();
}

function tekenP2() {
  push();
  noStroke();
  rectMode(CENTER);
  push();
  stroke('black');
  strokeWeight(1);
  fill('green');
  ellipse(0,0,100);
  pop();
  fill('white');
  ellipse(-20,-20,20,25);
  ellipse(20,-20,20,25);
  arc(0, 20, 50, 40, 0, PI);
  fill('black');
  ellipse(-15,-15,10,10);
  ellipse(15,-15,10,10);
  rect(0,30,45,1);
  pop();
}
