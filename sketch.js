var ball,ground,roof,boxes=[],chain;

const Engine=Matter.Engine, 
World=Matter.World,
Bodies=Matter.Bodies,
Constraint=Matter.Constraint;
var engine,world

function setup() {
  createCanvas(1200,800);
  engine=Engine.create();
  world=engine.world;
  ball=new Ball(500,400,100);
  roof=new Ground(500,100,200,20);
  ground=new Ground(600,750,1200,20);
  chain=new Chain(ball.body,roof.body);
  for(var i=0;i<7;i++) {
var box=new Box(900,100,70,70);
boxes.push(box)
var box=new Box(800,100,70,70);
boxes.push(box)
var box=new Box(700,100,70,70);
boxes.push(box)

  }
  
}







function draw() {
  background(255,255,255);  
  Engine.update(engine);
  ground.display();
  ball.display();
  roof.display();
  chain.display();
  for(var i=0;i<boxes.length;i++) {
   boxes[i].display();
  }
}

function mouseDragged() {
Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});


}