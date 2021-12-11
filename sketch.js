
var trex ,trex_running;
var ground;
var groundImage;
var groundInvisible;
var cloud;
var cloudImage;
function preload(){
 trex_running=loadAnimation("trex1.png","trex3.png","trex4.png");
 groundImage=loadImage("ground2.png");
 cloudImage=loadImage("cloud.png");
}

function setup(){
  createCanvas(600,200)
  
  //crear sprite del t-rex.
 trex=createSprite(50,160,20,50);
 trex.addAnimation("running",trex_running);
 edges=createEdgeSprites();


 //agregar tamaño y posicion al trex
 trex.scale=0.5;
 trex.x=50;

 //crear el suelo
 ground=createSprite(200,180,400,20);
 ground.addImage("suelo",groundImage);
  
 //crear suelo invisible
 groundInvisible=createSprite(200,190,400,10);
 groundInvisible.visible=false;
 
}

function draw(){
  background(200)
  ground.velocityX=-2
  if(ground.x<0){
    ground.x=ground.width/2;  
  }
  if(keyDown("space")&&trex.y>=100){
    trex.velocityY=-10
  }
  //asignar gravedad al trex
  trex.velocityY=trex.velocityY+0.5;
  trex.collide(groundInvisible);
  spawClouds();
  drawSprites();
}
  
function spawClouds(){
  if(frameCount%60===0){
    cloud=createSprite(600,100,40,10);
    cloud.addImage(cloudImage);
    cloud.y=Math.round(random(10,60));
    cloud.scale=0.4;
    cloud.velocityX=-3;

    //ajuste de profundidad
    cloud.depth=trex.depth;
    trex.depth=trex.depth+1;
  }
 
}  