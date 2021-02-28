function setup() {
  createCanvas(450,450);
  angleMode(DEGREES);
}

function draw() {
background(0);

translate(200,200)
rotate (-90);

  var hr = hour();
  var mn = minute();
  var sc = second();
  
  strokeWeight(8);
  stroke("orange");
  noFill();
  var scLine = map(sc,0,60,0,360);
  arc(0,0,300,300,0,scLine);
  
  stroke("white");
  var mnLine = map(mn,0,60,0,360);
  arc(0,0,280,280,0,mnLine);
  
  stroke("green");
  var hrLine = map(hr%12,0,12,-0,360);
  arc(0,0,260,260,0,hrLine);
  
  push();
  rotate(hrLine)
  stroke("blue");
  line(0,0,100,0);
  pop();
  
  
  push();
  rotate(scLine)
  stroke("blue");
  line(0,0,75,0);
  pop();
  
  push();
  rotate(mnLine)
  stroke("blue");
  line(0,0,50,0);
  pop();


  }