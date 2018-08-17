function Ball() {
   this.x = (width/2);
   this.y = (height/2);
   this.xSpeed = random(4, 8);
   this.ySpeed = random(3, 6);
   this.r = 25;

   this.display = function(){
      fill(0, 255, 0);
      strokeWeight(3)
      ellipse(this.x, this.y, this.r, this.r);
}

   this.move = function() {
      this.x += this.xSpeed;
      this.y += this.ySpeed;
   }

   this.bounce = function() {
      if(this.y > height || this.y < 0) {
          this.ySpeed *= -1;
   }
}

/*   this.collide = function(paddleX, paddleY) {
     this.otherX = paddleX;
     this.otherY = paddleY;

     this.distance = dist(this.x, this.y, this.otherX, this.otherY);
     console.log(this.distance);

     if(this.distance < 100) {
        this.xSpeed *= -1;
        this.ySpeed *= -1;
}

} */

   this.collideTwo = function(paddleX, paddleY) {
     this.otherX = paddleX;
     this.otherY = paddleY;

     if(this.x >= width - 20 && this.y <= this.otherY + 60 && this.y >= this.otherY - 60) {

      this.xSpeed *= -1;
      //this.ySpeed *= -1;
    }
}

 this.collideMe = function(paddleX, paddleY) {
     this.otherX = paddleX;
     this.otherY = paddleY;

     if (this.x <= this.otherX + 20 && this.y <= this.otherY + 60 && this.y >= this.otherY - 60) {

       this.xSpeed *= -1;
       //this.ySpeed *= -1;
    }
}






} // CONSTRUCTOR BRACKET
