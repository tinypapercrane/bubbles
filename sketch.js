let bubbles = [];
let numBubbles = 100;



function setup() {
  createCanvas(500, 500);
  frameRate(120);
  for (let i = 0; i < numBubbles; i++) {
    bubbles[i] = new Bubble(random(0, width), random(0, height), map(i,0,numBubbles-1,0.75,1)*random(10, 55), map(i, 0, numBubbles - 1, 0, 255));
  }
}

function draw() {
  background(0);
  for (let i = 0; i < bubbles.length; i++) {
    if (!bubbles[i].needsPop1()) {
      bubbles[i].move();
      bubbles[i].show();
    } else if (!bubbles[i].hasPopped1()) {
      bubbles[i].pop();
    }
    else{
      bubbles[i] = new Bubble(random(0, width), random(0, height), map(i,0,numBubbles-1,0.75,1)*random(10, 55), map(i, 0, numBubbles - 1, 0, 255));
      
    }
  }
}

function mousePressed() {
  for (let i = 0; i < numBubbles; i++) {
    bubbles[i].clicked(mouseX,mouseY);
  }
}