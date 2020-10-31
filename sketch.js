const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2;
var pig1;
var ground;


function setup() {
 var canvas= createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  box1 = new Box(200,100,50,100);
  box2 = new Box(240,300,50,50);

  pig1 = new Pig(200,200);

  

  ground = new Ground(200,390,400,20);
  //console.log(Log);
}

function draw() {
  background(0,0,0);
  Engine.update(engine);  

  box1.display();
  box2.display();
   pig1.display();
 
  ground.display();
  //drawSprites();
}