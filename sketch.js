
const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
const Constraint=Matter.Constraint
const Body=Matter.Body
var engine,world;
var ball1,rope1,ball2,rope2,ball3,rope3,ball4,rope4,ball5,rope5,ground;

function setup() {
  createCanvas(800,800);
  engine=Engine.create()
  world=engine.world
  ball1=new Ball(200,150)
  ball2=new Ball(160,150)
  ball3=new Ball(120,150)
  ball4=new Ball(240,150)
  ball5=new Ball(280,150)
  var options={
   isStatic:true 
  }
  ground=Bodies.rectangle(200,50,200,50,options)
  World.add(world,ground)
  rope1=new Rope(ball1.body,ground,0,0)
  rope2=new Rope(ball2.body,ground,-40,0)
  rope3=new Rope(ball3.body,ground,-80,0)
  rope4=new Rope(ball4.body,ground,40,0)
  rope5=new Rope(ball5.body,ground,80,0)
}

function draw() {
  background(255,255,255);
  Engine.update(engine) 
  ball1.display()
  ball2.display()
  ball3.display()
  ball4.display()
  ball5.display()
  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()
  rectMode(CENTER)
  rect(100,50,600,10) 
}

function keyPressed(){
  if(keyCode==UP_ARROW){
   Body.applyForce(ball3.body,ball3.body.position,{x:-40,y:-20}) 
  }
}