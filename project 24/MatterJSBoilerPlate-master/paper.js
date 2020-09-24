class Paper {
    constructor(x,y,r) {
      this.x=x
      this.y=y
      this.r=r
      var options = {
          isStatic: false,
          restitution: 0.3,
          friction: 0,
          density: 1.2
      }
      this.image = loadImage("sprites/paper.png");
      this.body = Bodies.circle(this.x,this.y,this.r,options);
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      translate(pos.x,pos.y)
      fill(255);
      image(this.image,0,0,this.r,this.r)
    //ellipse(pos.x, pos.y);
    }
  };