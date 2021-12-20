class Bubble {

  constructor(x, y, d, c) {
    this.x = x;
    this.y = y;
    this.d = d;
    this.c = c;
    this.needsPop = false;
    this.hasPopped = false;
    this.xSpeed = random(-1,1);
    this.ySpeed = random(-1,1);
    this.xA = 0;
    this.yA = 0;
  }

  move() {
    this.xA += random(-0.005, 0.005);
    this.yA += random(-0.005, 0.005);
    
    this.xSpeed += this.xA;
    this.ySpeed += this.yA;
    
    this.x += this.xSpeed;
    this.y += this.ySpeed;
    if(this.x<0||this.x>width||this.y<0||this.y>height){
      this.pop();
    }
  }

  show() {

      stroke(this.c);
      strokeWeight(4);
      fill(10,150);
      ellipse(this.x, this.y, this.d, this.d)
    
  }
  
  clicked(x,y){
    if(dist(x,y,this.x,this.y)<this.d){
      this.needsPop = true;
    }
  }
  pop() {
    let numLines = int(random(8, 15));
    for (var i = 0; i < 2 * PI; i += 2 * PI / numLines) {
      stroke(this.c);
      line(this.x + (this.d * cos(i)), this.y - (this.d * sin(i)), this.x + (1.75 * this.d * cos(i)), this.y - (1.75 * this.d * sin(i)));
    }
    this.needsPop = true;
    this.hasPopped = true;
  }
  needsPop1(){
    return this.needsPop;
  }
  hasPopped1(){
    return this.hasPopped;
  }

}