const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine,world;

function setup() {
  createCanvas(1200,800);
  
  engine = Engine.create();
  world = engine.world;

  ground1 = new Ground(450,425,250,20);
  ground2 = new Ground(800,300,250,20);

  polygon1 = new Polygon(200, 300, 6, 20,);

  slingshot = new SlingShot(this.polygon1,{x:100,y:200});
  imageMode(CENTER);


}

function draw() {
  background("#382C2C"); 

  Engine.update(engine);

  ground1.display();
  ground2.display();
  slingshot.display();
  polygon1.display();
  
}

function mouseDragged(){
  Matter.Body.setPosition(polygon1.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}