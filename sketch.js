
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;
var bob1, bob2, bob3, bob3, bob4, bob5, roof1;

function preload()
{
	
}

function setup() {
	createCanvas(700, 500);

	bobDiameter=15;
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1= new Bob(200,500,bobDiameter);
	bob2= new Bob(100,500,bobDiameter);
	bob3= new Bob(250,500,bobDiameter);
	bob4= new Bob(350,500,bobDiameter);
	bob5= new Bob(300,500,bobDiameter);
	roof1= new Roof(200,200,350,30);

	rope1= new Rope(bob1.body,roof1.body,-bobDiameter*8,0);
	rope2= new Rope(bob2.body,roof1.body,-bobDiameter*4,0);
	rope3= new Rope(bob3.body,roof1.body,-bobDiameter+25,0);
	rope4= new Rope(bob4.body,roof1.body, bobDiameter*4,0);
	rope5= new Rope(bob5.body,roof1.body, bobDiameter*8,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 bob1.display();
 bob2.display();
 bob3.display();
 bob4.display();
 bob5.display();

 roof1.display();
 rope1.display();
 rope2.display();
 rope3.display();
 rope4.display();
 rope5.display();
} 