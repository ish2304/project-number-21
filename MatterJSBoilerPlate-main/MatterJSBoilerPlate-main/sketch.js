
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball
var radius = 40


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
var ball_options={
	isStatic: true,
	restitution: 0.3,
	friction:0,
	density:1.2
}
	//Create the Bodies Here.
ball = Bodies.circle(260,100,radius/2,ball_options)
World.add(world,ball)

groundObj =new Ground(width/2,670,width,20)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(ball.position.x,ball.position.y,radius,radius)
  groundObj.display()
  drawSprites();
 
}



