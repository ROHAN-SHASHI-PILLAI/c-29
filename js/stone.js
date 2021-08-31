class Stone
{
  constructor(x, y,r) 
  {
    let options = {
     isStatic:true
    };
    
    this.body = Bodies.circle(x, y, r, options);
    
    
    World.add(world, this.body);
  }

  show() {
    let pos = this.body.position;
    push();
    ellipseMode(RADIUS);
    noStroke();
    fill(148,127,146);
    circle(pos.x,pos.y,r);
    pop();
  }
}
