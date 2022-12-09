var bg,bg2,form,system,code,security;
var car1
var car2
var car1_img, car2_img;
var zombie
var zombie_img;
var gameState = PLAY
var gameOvr,gameOvr_img
var score=0;

function preload() {
  bg = loadImage("background.jpg");
  bg2 = loadImage("helicopter.png")
  car1_img = loadImage("car1.png")
  car2_img = loadImage("car2.png")
  zombie_img = loadImage("zombie.png")
  gameOvr_img = loadImage("game over.png")
}

function setup() {
  createCanvas(1000,500);
  system = new System()
  security = new Security()

  car1 = createSprite(200,330);
  car1.addImage('car1', car1_img);
  car1.scale = 2;

  car2 = createSprite(200,430);
  car2.addImage('car2', car2_img);
  car2.scale= 2;

  zombie = createSprite(50,350)
  zombie.addImage('zombie',zombie_img)
  zombie.scale = 0.2
 
  gameOvr = createSprite(500,230)
  gameOvr.addImage('gameOvr',gameOvr_img)
  gameOvr.scale = 0.5
  gameOvr.visible = false
}

function draw() {
  background(bg);
  clues();
  security.display();
  textSize(20);
  fill("white");
  text("Score: " + score, 450, 50);

  if(score === 3) {
    clear()
    background(bg2)
    fill("black")
    textSize(40);
    text("City Escaped Yay!!",250, 200);

  }
  
  zombie.velocityX = 0.5
  if(zombie.x>=940){
    zombie.x = 50
  }
  //camera.position.y = car1.position.y-100;
  //camera.position.x = car1.position.x;
  drawSprites();
}