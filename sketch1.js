let circles = []
function setup () {
   createCanvas(400,400);
  background(220);
}
function draw () {
for(let circle of circles){
  fill(circle.randomColor);
  ellipse(circle.x, circle.y, 50);
}
  //check if mouse is pressed and drag it
  
  if (mouseIsPressed){
    let newCircle = {
      x:mouseX,
      y:mouseY,
      randomColor:color(random(255),random(225),random(225))
  };
    circles.push(newCircle);
    }
  }
  
  function mousePressed () {
//circle where mouse
    let newCircle = {
      x:mouseX,
      y:mouseY,
      randomColor:color(random(255),random(225),random(225))
  };
    circles.push(newCircle);
    }
  


