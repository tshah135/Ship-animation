var sea_1;
var ship_1;
var seaImg, shipImg1;

function preload()
{
seaImg = loadImage("sea.png");
shipImg1 = loadAnimation("ship-1.png", 
"ship-2.png", "ship-3.png", "ship-4.png");
}

function setup()
{
  createCanvas(400,400);

  sea_1 = createSprite(200, 150, 400, 200);
  sea_1.addImage("sea", seaImg);
  sea_1.scale = 0.4;
  sea_1.velocityX = -5

  ship_1 = createSprite(100, 200, 20, 20);
  ship_1.scale = 0.2
  ship_1.addAnimation("movingship", shipImg1);

}

function draw() {

  background("blue");
  
  if (sea_1.x < 0) {
    sea_1.x = sea_1.width/8;
  }
  
  drawSprites();
}