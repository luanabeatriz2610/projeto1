function setup() {
  createCanvas(1000, 900);
  background("rgb(206,133,204)");
}

function draw() {
  fill("black")
  stroke("rgb(6,194,241)")
  if(mouseIsPressed)
  rect(mouseX,mouseY,50,70)
}
