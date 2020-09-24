
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;
    
	ground = new Ground(400,400,800,20);
	paper = new Paper(100,0,70);
    dustbin = new Dustbin(600,380,200,20);
	Engine.run(engine);
  
}


function draw() {
background("white");
  rectMode(CENTER);
  
  
  paper.display();
  ground.display();
  dustbin.display();
  
  drawSprites();
  
}
function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:14,y:-14});
	}
}


