var mr, fr;

function setup() {
  createCanvas(800,400);
  fr = createSprite(400, 200, 80, 50);
  fr.shapeColor = "green";
  fr.debug = true;

  mr = createSprite(200, 200, 50, 80);
  mr.shapeColor = "green";
  mr.debug = true;

  dr = createSprite(600, 100, 50, 80);
  dr.shapeColor = "blue";
  dr.debug = true;
  dr.velocityX = -6;

  pr = createSprite(100, 100, 50, 80);
  pr.shapeColor = "blue";
  pr.debug = true;
  pr.velocityX = 6;
}

function draw() {
  background(0);
    

  mr.x = World.mouseX;
  mr.y = World.mouseY;
  isTouching();
  bounceOff() ;
  drawSprites();
}

function isTouching() {
  if(mr.x - fr.x < mr.width/2 + fr.width/2  && fr.x - mr.x < mr.width/2 + fr.width/2 && mr.y - fr.y < mr.height/2 + fr.height/2  && fr.y - mr.y < mr.height/2 + fr.height/2){
    fr.shapeColor = "red";
    mr.shapeColor = "red";
  }
  else{
    fr.shapeColor = "green";
    mr.shapeColor = "green";    
  }
}

function bounceOff() {
 if(dr.x - pr.x < dr.width/2 + pr.width/2  && pr.x - dr.x < dr.width/2 + pr.width/2){
  pr.velocityX = pr.velocityX * (-1);
  dr.velocityX = dr.velocityX * (-1);
 }
 if(dr.y - pr.y < dr.height/2 + pr.height/2  && pr.y - dr.y < dr.height/2 + pr.height/2){
  pr.velocityY = pr.velocityY * (-1);
  dr.velocityY = dr.velocityY * (-1);
 }
}