class Dustbin {
    constructor(x,y) {
        this.x=x;
        this.y=y;
        this.dustbinwidth=200;
        this.dustbinheight=100;
        this.wallthickness=20;

        this.image=loadImage("sprites/dustbin.png");
        this.bottombody=Bodies.rectangle(this.x,this.y,this.dustbinwidth,this.wallthickness,{isStatic:true})
        this.leftwallbody=Bodies.rectangle(this.x-this.dustbinwidth/2,this.y-this.dustbinheight/2,this.wallthickness,this.dustbinheight,{isStatic:true})
        this.rightwallbody=Bodies.rectangle(this.x+this.dustbinwidth/2,this.y-this.dustbinheight/2,this.wallthickness,this.dustbinheight,{isStatic:true})
        World.add(world, this.leftwallbody);
        World.add(world, this.rightwallbody);
        World.add(world, this.bottombody);
      }
      display(){
        var posleft =this.leftwallbody.position;
        var posbottom =this.bottombody.position;
        var posright =this.rightwallbody.position;
       push()
       translate(posleft.x,posleft.y);
       rectMode(CENTER)
       strokeWeight(4)
       angleMode(RADIANS)
       fill("white")
       rotate(this.angle)
       rect(0,0,this.wallthickness,this.dustbinheight)
       pop()

       push()
       translate(posright.x,posright.y);
       rectMode(CENTER)
       strokeWeight(4)
       angleMode(RADIANS)
       fill("white")
       rotate(-1*this.angle)
       rect(0,0,this.wallthickness,this.dustbinheight)
       pop()

       push()
       translate(posbottom.x,posbottom.y+10);
       rectMode(CENTER)
       strokeWeight(4)
       angleMode(RADIANS)
       fill("white")
       rotate(this.angle)
       imageMode(CENTER)
       image(this.image,0,-this.dustbinheight/2,this.dustbinwidth+100,this.dustbinheight+20)
       //rect(0,0,this.dustbinwidth,this.wallthickness)
       pop()

      }
    };