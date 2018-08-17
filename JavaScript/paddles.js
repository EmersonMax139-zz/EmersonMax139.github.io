function Paddle(x, y) {
  this.x = x;
  this.y = y;
  this.xSpeed = 5;
  this.ySpeed = 5;

  this.display = function() {
    rectMode(CENTER);
    fill(255);
    strokeWeight(3);
    rect(this.x,this.y, 14, 100);
}



  this.move = function keyPressed() {

    if (keyIsDown(UP_ARROW)) {
       this.y -= this.ySpeed;
    }
    if (keyIsDown(DOWN_ARROW)) {
       this.y += this.ySpeed;
    }
}

 this.moveOpponent = function keyPressed() {

   if (keyIsDown(87)) {
      this.y -= this.ySpeed;
   }
   if (keyIsDown(83)) {
      this.y += this.ySpeed;
   }
}



}
