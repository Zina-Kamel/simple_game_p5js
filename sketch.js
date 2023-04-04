let character;
let bgimg;
let charimg;
let rockimg;
let rocks = [];
let score;
let inst;

function setup() {
  createCanvas(600, 430);
  
  bgimg = loadImage('bg.jpg');
  charimg = loadImage('char.png');
  rockimg = loadImage('rock.png');
  score = 0;
  
  inst = 0;

  character = new Character();
}

function startMenu(){
    background(255, 0, 255)
    textSize(10)
    text('Right Click to start the game', 525, 30)
    textSize(10)
    text('1. Rocks will move across the screen', 50, 150)
    text('2. Make your character jump using the left mouse click to avoid the obstacles', 50, 200)
    text('you can double click for higher jumps when obstacles are close to each other', 80, 240)
    text('3. The game is over when a rock hits you.', 50, 290)
    if (mouseButton == RIGHT) {
      inst=1;
    }        



}

function mousePressed() {
  character.jump();
}

function draw() {
  clear();
  if(inst==0){
    startMenu();
  }
  if(inst==1){
    score += 0.1;

    if(random(1)<0.005){
      rocks.push(new Obstacle());
    }

    background(bgimg);

    noStroke();
    fill(255,0,0);
    textSize(30);
    text("score: ", 10,50);
    text(Math.floor(score), 100,50);

    character.move();

    for(let rock of rocks){
      rock.move();
      rock.display();

      var d = dist(character.x, character.y, rock.x, rock.y);
      if (d < character.b + rock.b - 50) {
        loseScreen();
        score = 0;
      }
    }

    character.display();


  }

}

function loseScreen() {
  background(0);
  noStroke();
  fill(255,0,0);
  textSize(60);
  text("game over", 200,100);
  
}
