const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world,ground;
var backImg;
var towerImg,tower;
var cannnon, cannonBall;
var boat;
var ground;


var angle = 20;


var balls = [];

var boats = [];

function preload() {  
  backImg = loadImage("assets/background.gif");
  towerImg = loadImage("assets/tower.png");
}



function setup() {
  angleMode(DEGREES);
  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;

  opciones = {
    isStatic: true
  }

  tower = Bodies.rectangle(160,350,160,310,opciones);
  World.add(world,tower);
 
  cannon = new Cannon(180,110,130,100,angle);
  ground = Bodies.rectangle(0,height-1,width*2,1,opciones);
  World.add(world,ground);


}



function draw() {
  background(backImg);
  
  Engine.update(engine);
  push()
  imageMode(CENTER);
  image(towerImg,tower.position.x,tower.position.y,160,310);
  pop();

  cannon.show();

  for(var i = 0; i < balls.length; i ++){
    showCannonBalls(balls[i]);
  }

  showBoats();
}

function keyReleased(){
  if(keyCode === DOWN_ARROW){
    balls[balls.length -1].shoot();
  }
}

function keyPressed(){
  if(keyCode === DOWN_ARROW){
    cannonBall = new CannonBall(cannon.x,cannon.y);
    balls.push(cannonBall);
  }
}

function showCannonBalls(ball){
  if(ball){
    ball.show();
  }
}

function showBoats(){
  if(boats.lenght>0){

    for(var i=0; i<boats.lenght; i++){
      if(boats[i]){
        Matter.Body.setVelocity(boats[i].body,{x:-0.9,y:0});
        boats[i].show();
      }
 
    
    }

  }  else{
    boat = new Boat(width-80,300,170,170,-80);
    boats.push(boat);
  }

}