var sea, seaImage;
var ship, shipImage;

function preload(){
seaImage = loadImage("sea.png");
shipImage = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png");
}

function setup(){
  createCanvas(400,400);

  //creating the sea sprite
  sea = createSprite(400,200,400,400);
  sea.addAnimation("moving sea", seaImage);
  sea.scale = 0.25;

  //creating the ship sprite
  ship = createSprite(100,200,100,100);
  ship.addAnimation("sailing", shipImage);
  ship.scale = 0.2;
}

function draw() {
  background("blue");

  //making the sea/background move
  sea.velocityX = -1;

  //resetting the background
   if (sea.x < 0) {
      sea.x = 390;
    }
    
  //if space is being pressed, ship's speed increases by 10
   if (keyDown("space")) {
      sea.velocityX = sea.velocityX - 10;
   }

  drawSprites();
}