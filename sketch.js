
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint
function preload()
{
	
}

function setup() {
	createCanvas(1000, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground = new Ground(500, 100,500, 20 )
bob1 = new Bob(300, 300,50)
bob2 = new Bob(400, 300,50)
bob3 = new Bob(500, 300,50)
bob4 = new Bob(600, 300,50)
bob5 = new Bob(700, 300,50)
rope1 = new Rope(bob1.body,ground.body,-200,0)
rope2 = new Rope(bob2.body,ground.body,-100,0)
rope3 = new Rope(bob3.body,ground.body,0,0)
rope4 = new Rope(bob4.body,ground.body,100,0)
rope5 = new Rope(bob5.body,ground.body,200,0)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 ground.display()
 bob1.display() 
 bob2.display() 
 bob3.display() 
 bob4.display() 
 bob5.display() 
 rope1.display() 
 rope2.display() 
 rope3.display() 
 rope4.display() 
 rope5.display() 


  drawSprites();
 
}
function keyPressed(){ 
	if(keyCode===UP_ARROW){ Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-100,y:-60}); } }



