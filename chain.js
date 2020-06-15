class Chain {
    constructor(bodyA,bodyB){
       
        var options = {
            bodyA : bird.body,
            bodyB : constrainedlog.body,
            stiffness : 0.1,
            length : 10
        }
       this.chain = Constraint.create(options);
        World.add(world,this.chain); 
    
    }
    display(){
    strokeWeight(4);
    line(bird.body.position.x,bird.body.position.y,constrainedlog.body.position.x,constrainedlog.body.position.y);
    }
}