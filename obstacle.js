class Obstacle{
  constructor(){
    this.b = 50;
    this.x = width;
    this.y = height- this.b;
  }
  
  move(){
    
    this.x -= 3;
  }
  
  display(){
    image(rockimg, this.x, this.y, this.b, this.b);
  }
}