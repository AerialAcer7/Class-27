class Chain {
   constructor(body1,body2){
     var options={
      bodyA: body1,
      bodyB: body2,
      length: 50,
      stiffness: 0.8
     }  
     this.chainBody = Matter.Constraint.create(options);
     World.add(world,this.chainBody);

   } 
   display(){
     var pointA = this.chainBody.bodyA.position;
     var pointB = this.chainBody.bodyB.position;  
     line(pointA.x,pointA.y,pointB.x,pointB.y);  
   }
}