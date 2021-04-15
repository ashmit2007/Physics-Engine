// WORLD, ENGINE , BODIES

const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var ball;


function setup() {
  createCanvas(600,600);

  engine = Engine.create();
  world = engine.world;

  var obj_opt={
    isStatic: true

  }

  var ball_opt={
    restitution: 1
  }

  ground = Bodies.rectangle(300, 580, 600,20, obj_opt);
  World.add(world, ground);

  ball = Bodies.circle(300,100,20, ball_opt);
  World.add(world, ball);

  console.log(ball);

  /*console.log(o);
  console.log(object.type);
  console.log(object.position.x);
  console.log(object.position.y);*/
  
}

function draw() {
  background(255,255,255); 
  Engine.update(engine);
  rectMode(CENTER) ;
  fill("brown");
  rect(ground.position.x,ground.position.y, 600,20);

  ellipseMode(RADIUS);
  fill("blue");
  ellipse(ball.position.x,ball.position.y,20,20);
  
}