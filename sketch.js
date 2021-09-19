
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score,ground
var survivalTime

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
  
   FoodGroup= new Group();
  obstacleGroup= new Group();
 
}



function setup() {
  createCanvas(670,400);
  score = 0;
  survivalTime = 0;
 
  monkey = createSprite(80,315,20,20);  monkey.addAnimation("moving",monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(400,350,900,10);
  ground.velocityX = -4;
  ground.x = ground.width/2;
  console.log(ground.x);

  
}


function draw() {
  background(255);
  
  if(ground.x<0){
    ground.velocityX =-7;
    ground.x = ground.width/2;
    
  }
  
  if(keyDown ("space")){
    monkey.velocityY = -12;
  }
  
  monkey.velocityY = monkey.velocityY + 0.8;
  monkey.collide(ground); 
  
   if(World.frameCount%200===0){
      fruits();
 }
  
  if(World.frameCount%300===0){
      stones();  
 }
  
  if(monkey.isTouching(FoodGroup)){
     FoodGroup.destroyEach()
    score=score+1
      }
  
  fill("white") ;
  text("Score: "+ score, 500,50);
  
  fill("black");
  var survivalTime=Math.round(getFrameRate()/1);
  text("Survival Time: "+ survivalTime,100,50);
  
drawSprites();
  
  
}

function fruits(){
  banana=createSprite(670,Math.round(random(170,230)),10,10);
  banana.addImage(bananaImage);
  banana.scale=0.1;
  banana.velocityX=-3;
  FoodGroup.add(banana);
}

function stones(){
  obstacle=createSprite(670,309,10,10);
  obstacle.addImage(obstaceImage);
  obstacle.velocityX=-4;
  obstacle.scale=0.2;
  obstacleGroup.add(obstacle);
}




