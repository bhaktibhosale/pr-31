class Drop{
    constructor(x,y){
        var options={
            'restitution':0.1,
            'friction':0.01
        }
       this.body=Bodies.circle(x,y,5,options);
        this.radius=5;
        World.add(world,this.body);
    }
    updateY(){ // y position of the rain drop -- when it reaches the ground / some position at bottom

    }
      rain(){
      //    console.log(this.body.position); 
         fill("blue");
         ellipseMode(CENTER);
         ellipse(this.body.positon.x,this.body.positon.y,this.radius,this.radius);
         
      }
}
    