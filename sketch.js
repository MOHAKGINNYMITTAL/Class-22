const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var engine,world;
var object;


function setup() {

  createCanvas(800,400);

  engine=Engine.create();
  world=engine.world;

  var object_options={
    isStatic:true
  }
  object=Bodies.rectangle(400,350,800,30,object_options);
  World.add(world,object);
  var ball_options={
    restitution:1.0
  }
  ball=Bodies.circle(400,10,20,ball_options);
  World.add(world,ball);
 
}

function draw() {
  background("green");
  Engine.update(engine);
  rectMode(CENTER);
  rect(object.position.x,object.position.y,800,30);
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,20);
}