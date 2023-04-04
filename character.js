class Character{
  constructor(){
    this.b = 50;
    this.x = this.b;
    this.y = height-50;
    this.velocity = 0;
    this.gravity = 1.2;
  }
  
  jump(){
    // if(this.y==height-50){
      this.velocity = -24;
    // }
    
  }
  
  move(){
    this.y += this.velocity;
    this.velocity += this.gravity;
    this.y = constrain(this.y, 0, height-this.b);
  }
  
  display(){
    image(charimg, this.x, this.y, this.b, this.b);
  }
}