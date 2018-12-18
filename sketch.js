let angle = 0;
function setup() {
  createCanvas(400, 300, WEBGL);
}

function draw() {
  background(175);
  
  fill(255,0,150,170);
  translate(mouseX-width/2, mouseY-height/2,0);
  angle += 0.005;
  rotateX(angle);
  rotateY(angle);
  rotateZ(angle);
  rectMode(CENTER);
  //rect(0,0,150,150);
  box(100,110,120);
  
}