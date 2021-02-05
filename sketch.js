var mapped;
var isw;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  mouseDragged();
  drawSprites();
}

function mouseDragged() {
  isw = mouseX;
  mapped = map(isw, 0, 400, 2, 50);
  strokeWeight(mapped);
  noFill();
  ellipseMode(RADIUS)
  ellipse(200, 200, 100, 100);
}