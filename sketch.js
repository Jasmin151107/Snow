var bg 
 var backgroundImg
 var snow = []

function preload(){
getTime();

  bg = loadImage("snow3.jpg")
}

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  engine = Engine.create();
  world = engine.world();

  
}

function draw() {
  Engine.update(engine);
  if(backgroundImg)
  background(backgroundImg);  
  
  rand = Math.round(random(1,4));

  if (frameCount% 5===0){
    snow.push(new Snow(random(0,800),30,30))
  }
  for (var j = 0;j<snow.length; j++){
    snow[j].display()
  }
  drawSprites();
}

async function getTime (){
  var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata")
  var responsejson = await response.json ();
  var dateTime = responseJson.datetime
  var hour = dateTime.slice (11,13);
  if(hour>06&&hour<18)
bg = "snow1.jpg"


else {
  bg = "snow2.jpg"

}
 backgroundImg = loadImage(bg)
 console.log(dateTime);

}
