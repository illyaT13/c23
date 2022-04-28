const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

//creating AI engine, world and bodies

var engine, world;
var ground;
var ball;

function setup() {
  createCanvas(400, 400);
  engine = Engine.create();
  world = engine.world;

  var ball_options = {
    restitution: 1.2,
    frictionAir: 0.01,
  };

  ball = Bodies.circle(200, 200, 20, ball_options);
  World.add(world, ball);
  //console.log(world)
  var ground_options = {
    isStatic: true,
  };

  ground = Bodies.rectangle(200, 380, 400, 20, ground_options);
  World.add(world, ground);
  //console.log(ground.friction)
}

function draw() {
  background("black");

  //rect(30, 20, 55, 55);

  Engine.update(engine);
  
  push();
  translate(ground.position.x, ground.position.y);
  rectMode(CENTER);
  fill("blue");
  rect(0, 0, 400, 20);
  pop();

  push();
  fill("yellow");
  translate(ball.position.x, ball.position.y);
  ellipseMode(RADIUS);
  ellipse(0, 0, 20, 20);
  pop();
}
