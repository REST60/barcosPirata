class Boat{
    constructor(x,y,w,h,boatPos){
        var options ={
            restitution: 0.8,
            friction: 1.0,
            density: 1.0,
            isStatic: true
        }


        this.w = w;
        this.h = h;
        this.boatPosition = boatPos
        this.body = Bodies.rectangle(x,y,w,h);
        this.image = loadImage("assets/boat.png");
        World.add(world,this.body)

    }

    show(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        imageMode(CENTER);
        image(this.image,0,this.boatPosition,this.w,this.h);
        pop();

    }
}