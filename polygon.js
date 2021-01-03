class Polygon{
    constructor(x,y,sides,radius){
     var Options = {
       'restitution':0.8,
       'friction':1.0,
       'density':1.0
     }

     this.image = loadImage("polygon.png");
 
     this.body = Bodies.polygon(x,y,sides,radius,Options);
     this.sides = sides;
     this.radius = radius;
     World.add(world,this.body);
    }
 
    display(){
      var pos = this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x,pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image,this.body.position.x,this.body.position.y,50,50);
      pop();  
    }
 }