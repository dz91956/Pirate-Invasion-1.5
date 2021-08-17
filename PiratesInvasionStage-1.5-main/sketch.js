const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var canvas, angle, tower, ground, cannon;
var cannon;
var cannonBall;
var balls = [];





function preload() {
  backgroundImg = loadImage("./assets/background.gif");
  towerImage = loadImage("./assets/tower.png");

}

function setup() {
  canvas = createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;
  angle = -PI / 4;
  ground = new Ground(0, height - 1, width * 2, 1);
  tower = new Tower(150, 350, 160, 310);
  cannon = new Cannon(180, 110, 110, 50, angle);

}

function draw() {
  background(backgroundImg);

  keyRelease();

  Engine.update(engine);
  ground.display();
  

  cannon.display();
  tower.display();
  //cannonBall.display();

  for (var i = 0; i<balls.length; i++){
    showCannonBall(balls[i], i);

  }
  
}

function keyRelease() {

  if (keyCode === DOWN_ARROW){
    balls[balls.length-1]
    cannonBall = new CannonBall(cannon.x, cannon.y);
    cannonBall.shoot();
    balls.push(cannonBall);
  }
}



function showCannonBall(ball, index){
  ball.display();
  if (ball.body.position.y >= height-50 || ball.body.position.x >= width){
    Matter.World.remove(world, ball.body);
    ball.splice(index, 1);
  }
  
}
 

