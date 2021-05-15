class Snow {
constructor(x,y,r){
  options = {
    restitution : 0.4
}
  this.image = loadImage("snow5.webp")
  this.image = loadImage("snow4.webp")
 this.r = 10;
this.body = Bodies.circle(x,y,this.r,options);
World.add(World,this.body);
}
display(){
  var pos = this.body.position 
  var angle = this.body.angle

  push()
  translate(pos.x,pos.y);
  rotate(angle)
  fill ("white");
  imageMode(CENTER);
  image(this.image,0,0,this.r*2,this.r*2);
  pop ()
}

}