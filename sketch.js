var path;
var pathImage;
var jake;
var jakeGif;
var paddle1;
var paddle2;
var edges
function preload(){
  
  
  pathImage=loadImage("path.png");
  jakeGif=loadAnimation("Jake1.png","Jake2.png","jake3.png","jake4.PNG","jake5.png");
}

function setup(){
  createCanvas(400,400);
  //crea aquí los sprites
  path=createSprite(200,180,400,20);
  path.addImage("path",pathImage);
  path.velocityY=4;
  path.scale=1.3;
  jake=createSprite(200,320,50,20);
  jake.addAnimation("jake",jakeGif);
  paddle1=createSprite(60,0,20,800);
  paddle2=createSprite(340,0,20,800);
  paddle1.visible=false;
  paddle2.visible=false;
}

function draw() {
  background(0);
  jake.x=mouseX;
  
   if(path.y>400){
    path.y =height/2;
     }
  
  drawSprites();
  
}
