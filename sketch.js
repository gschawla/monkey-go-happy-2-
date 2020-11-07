var monkey,monkey_running,ground,backGround,bg,stone,stoneImage,score,obstacleGroup,banana,bananaImage,foodGroup;

function preload(){
  monkey_running=loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png")
  
  bg=loadImage("jungle.jpg");
  stoneImage=loadImage("stone.png");
  bananaImage=loadImage("banana.png");
  
}

function setup() {
  createCanvas(600, 400);
    score=0;
backGround=createSprite(300,300,600,400);
backGround.addAnimation("still",bg);
 backGround.velocityX=-3;

 monkey=createSprite(50,350,20,20); 
 monkey.addAnimation("running", monkey_running) 
 monkey.scale=0.1; 
 
 ground=createSprite(300,360,610,10);
 ground.velocityX=-7
 ground.visible=false; 
 
 
  
 obstacleGroup=createGroup();
 foodGroup=createGroup();
 
 
}

function draw() {
  
  background("white");
   text(mouseX+","+mouseY,mouseX,mouseY);
  monkey.velocityY=monkey.velocityY+0.8;
  
    stroke("white")
  textSize(20);
 fill("white")
  text("score:"+score,500,50)
  
 console.log(monkey.y)
  
  if(ground.x>0){
     ground.x=ground.width/2;
   
    spawnFood();
  }
   if(backGround.x<100){
    backGround.x=backGround.width/2;
     
  }
   if(obstacleGroup.isTouching(monkey)){
    
    monkey.scale=0.07;
    }  
  if(foodGroup.isTouching(monkey)){
     score=score+2;
    monkey.scale=0.115;
    foodGroup.destroyEach();
     }
   
  if(keyDown("space")&& monkey.y>=320){
    monkey.velocityY=-15;
  }
 
 monkey.collide(ground); 
 spawnObstacles();
  
  switch(score){
      
    case 10: monkey.scale=0.111
      break;
    case 20:monkey.scale=0.112
       break;
    case 30:monkey.scale=0.113
       break;
    case 40:monkey.scale=0.114  
        break;
        default: break;  
  }
  
  
  drawSprites();
}
  
function spawnObstacles(){
  
 if(frameCount%200===0){ 
 stone=createSprite(590,340,20,20);  
 stone.velocityX=-5; 
 stone.addAnimation("still",stoneImage) ; 
 stone.scale=0.15;
 stone.lifetime=200;  
 obstacleGroup.add(stone);
 
  
 }
  
  
}

function spawnFood(){
  if(frameCount%80===0){
  banana=createSprite(589,250,20,20)
  banana.addAnimation("still",bananaImage);
  banana.scale=0.05;  
  banana.y=Math.round(random(250,200));
  banana.velocityX=-4;   
  foodGroup.add(banana);   
  
}

}


