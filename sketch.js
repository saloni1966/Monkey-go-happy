
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score=0,ground,bananaGroup,obstaclesGroup,invisibleground;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,400);
  ground = createSprite(300,390,1200,20);
  ground.shapeColor = "maroon";
  ground.velocityX= -4;
  
  monkey = createSprite(70,340,10,10);
  monkey.addAnimation("running",monkey_running);
  monkey.scale= 0.17;
  
  
  
  bananaGroup = createGroup();
  obstaclesGroup = createGroup();
  
  invisibleground = createSprite(300,400,600,20);
  
}


function draw() {
  background("white");
  
  text("Survival Rate : "+score,200,30);
 score =  Math.ceil(frameCount/frameRate()) 
  if(keyDown("space")){
    
    monkey.velocityY= -14;
  }
  monkey.velocityY = monkey.velocityY +0.5;
  if(ground.x<0){
    ground.x = ground.width/2;
  }
  food();
  Obstacle();
 invisibleground.visible =false;
  monkey.collide(invisibleground);
drawSprites();
  
}


function food(){
  
  if(frameCount % 80 === 0){
    
    banana = createSprite(600,Math.round(random(120,200)),10,10);
    banana.velocityX = -4;
    banana.addImage("img", bananaImage);
    banana.scale = 0.1;
    
    bananaGroup.add(banana);
    bananaGroup.setLifetimeEach(150);
    
  }
  
  
}
function Obstacle(){
  if(frameCount % 300 ===0){
  obstacle = createSprite(600,350,10,10);
  obstacle.addImage(obstacleImage);
  obstacle.velocityX =-4;
    obstacle.scale = 0.2;
  obstaclesGroup.setLifetimeEach(150); 
  
  }
}



