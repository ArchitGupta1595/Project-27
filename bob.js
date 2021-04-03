class Bob{
    constructor(x,y,r){
        var options= {
            isStatic:false,
            restitution:0,
            friction:1,
            density:2
        }
        this.body=Bodies.circle(x,y,r,options);
        
        this.radius=r;
        World.add(world,this.body);
    }
    display(){
        var pos =this.body.position;
        push();
        translate(pos.x,pos.y);
        ellipseMode(RADIUS);
        ellipse(0, 0, this.radius, this.radius);
        
        pop();
    }
}