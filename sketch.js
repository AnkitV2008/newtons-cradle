
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const body = Matter.Body;
const Render= Matter.Render;
const Constraint = Matter.Constraint;


function setup() {
	createCanvas(1500, 1200);


	engine = Engine.create();
	world = engine.world;

  roof = new Roof(width/2,height/4,width/2,60);

bobDiameter=80

startBobPositionX=width/3
startBobPositionY=height/6+350


bob1=new Bob(startBobPositionX-bobDiameter*2,startBobPositionY,bobDiameter);
bob2=new Bob(startBobPositionX-bobDiameter,startBobPositionY,bobDiameter);
bob3=new Bob(startBobPositionX,startBobPositionY,bobDiameter);
bob4=new Bob(startBobPositionX+bobDiameter,startBobPositionY,bobDiameter);
bob5=new Bob(startBobPositionX+bobDiameter*2,startBobPositionY,bobDiameter);

 
 rope1= new Rope(bob1.body,roof.body,-bobDiameter*2,0);
 rope2= new Rope(bob2.body,roof.body,-bobDiameter*1,0);
 rope3= new Rope(bob3.body,roof.body,-0*2,0);
 rope4= new Rope(bob4.body,roof.body,bobDiameter*1,0);
 rope5= new Rope(bob5.body,roof.body,bobDiameter*2,0);
  
	Engine.run(engine);
  
}


function draw() {
  background(100);

  rectMode(CENTER);
  Engine.update(engine);
  bob1.display();
  bob2.display();
  bob3.display();
  bob3.display();
  bob4.display();
  bob5.display();
 
  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
 

 
}

function keyPressed() { 
	if (keyCode === UP_ARROW) 
	{ Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-750,y:-705}); } 
} 




