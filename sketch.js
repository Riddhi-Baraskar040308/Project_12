var garden,rabbit,apple,leaf;
var gardenImg,rabbitImg,appleImage,leafImage;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImage = loadImage("apple.png");
  leafImage = loadImage("leaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(50,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);


}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  var select_sprites = Math.round(random(1,2));

  if(frameCount % 80 == 0){
    if(select_sprites == 1){
     createApples();
    }
  else{
    createLeaves();
  }
  }
 rabbit.x = World.mouseX;
  drawSprites();
}

function createApples(){
apple = createSprite(random(50,350),40,10,10);
apple.addImage("apple",appleImage);
apple.scale = 0.1;
apple.velocityY = 3;
apple.lifetime = 60;
}

function createLeaves(){
leaf = createSprite(random(100,270),240,10,10);
leaf.addImage("leaf",leafImage);
leaf.scale = 0.1;
leaf.velocityY = 3;
leaf.lifetime = 70;
}