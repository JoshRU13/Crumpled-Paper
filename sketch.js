
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	dustbinIMG = loadImage("dustbingreen.png")

}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
d1=new dustbin(940,409,20,100)
d2=new dustbin(1130,409,20,100)
d3=new dustbin(1035,454,190,20)
ball = new paper(90,350,20)
ground = new dustbin(600,465,1200,20)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("yellow");
  d1.display()
  d2.display()
  d3.display()
  ball.display()
  image (dustbinIMG,920,280,250,200)
  ground.display()
  drawSprites();
 
}
function keyPressed(){
	Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85});
}



