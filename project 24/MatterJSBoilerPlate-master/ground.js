class Ground {
    constructor(x,y,width,height) {
      this.x=x
      this.y=y
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(this.x,this.y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      translate(pos.x,pos.y)
      rectMode(CENTER);
      fill("yellow");
      rect(0,0, this.width, this.height);
    }
  };