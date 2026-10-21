
function setup () {
   createCanvas(800,400);
  background(220);
}

function draw () {
fill('#D3F553')
  ellipse(200,300,100,150);
  
  push();
  translate(200,200);
  fill("#32caae");
  scale(2);
  arc(0,0,100,100,PI,0,CHORD);``
pop();
  
fill('#D3F553');
ellipse(200,200,80);
}