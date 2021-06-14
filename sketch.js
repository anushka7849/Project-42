var iss,spacecraft,hasDocked;
var spacecraft1Image,spacecraft2Image,spacecraft3Image,spacecraft4Image
var bgImage,issImage;
function preload(){
issImage=loadImage("images/iss.png");
bgImage=loadImage("images/spacebg.jpg");
spacecraft1Image=loadImage("images/spacecraft1.png");
spacecraft2Image=loadImage("images/spacecraft2.png");
spacecraft3Image=loadImage("images/spacecraft3.png");
spacecraft4Image=loadImage("images/spacecraft4.png");
}

function setup() {
  createCanvas(800,400);
  iss=createSprite(400, 200, 50, 50);
  iss.addImage(issImage);
 iss.scale=0.6;

  spacecraft=createSprite(550,300,50,50);
  spacecraft.addImage(spacecraft1Image);
  spacecraft.scale=0.1;

  
}

function draw() {
  background(bgImage);  

if(!hasDocked){
  if(spacecraft.x===360&&spacecraft.y===255){
    hasDocked=true;
    fill("lightgreen")
    textSize(18);
    text("Docking Successful!!",400,300);
  }
  if(keyIsDown(LEFT_ARROW)){
    spacecraft.addImage(spacecraft3Image);
    spacecraft.x=spacecraft.x-5;
  }
  if(keyIsDown(RIGHT_ARROW)){
    spacecraft.addImage(spacecraft4Image);
    spacecraft.x=spacecraft.x+5;
  }
  if(keyIsDown(DOWN_ARROW)){
    spacecraft.addImage(spacecraft2Image);
  }
  if(keyIsDown(UP_ARROW)) {
    spacecraft.y=spacecraft.y-5;
  }
}
console.log(spacecraft.x);
console.log(spacecraft.y);
  drawSprites();
}
