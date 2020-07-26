var CB,CBimg;
var packageBody,ground;
var bord,bord2,Bord3,dustbinimg;


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
  CBImg = loadImage("sprites/CB.png");
  dustbinimg = loadImage("sprites/Dustbin.png");
  

}

function setup() {
  createCanvas(800, 400);
    ground=createSprite(400,390,800,20)
    
    CB=createSprite(0,350,20,20);
    CB.velocityX=2;


    bord=createSprite(670,350,20,50)
    bord2=createSprite(705,380,90,20)
    bord3=createSprite(740,350,20,50)
    bord.shapeColour=("red");
    bord2.shapeColour=("red");
    bord3.shapeColour=("red");

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(0,380,20);
  ellipse.velocityX=2

  if(keyDown("up")) {
    CB.velocityY = -10;
   }
  CB.velocityY = CB.velocityY + 0.8
 
  CB.collide(ground )
  CB.collide(bord )
  CB.collide(bord2 )
  CB.collide(bord3 )

  
  ground.fill=("red");
  drawSprites();
}

//function keypressed(){
  //if(keyCode === UP_ARROW) {
  //  Matter.Body.applyForce(helicopter.body,helicopter.body.postion,{x:85,y:-85})
 // }
//}












