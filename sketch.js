var bullet, wall, thickness;
var speed, weight;


function setup() {
  createCanvas(1600,400);
  speed = random(55,90);
   weight = random(400,1500);
  bullet = createSprite(50, 200, 10, 20);
   bullet.shapeColor = "white";
   wall  = createSprite(1200,200,thickness,height/2);
   wall.shapeColor = color(80,80,80);
   thickness = random(22,83);
   speed = random(223,321)
   weight(30,52)
}

function draw() {
  background(255,255,255);  
  
  if (hasCollided(wall,bullet))
  {
    bullet.velocityX = 0;

    var damage = 0.5 * weight * speed * speed/(thickness*thickness*thickness);

    if(damage>10)
    {
      wall.shapeColor("green");
    }
    if(damage<10)
    
      wall.shapeColor("red");
    }
    drawSprites();
  }

 


function hasCollided(lbullet,lwall){
  bulletRightEdge = lbullet.x+ lbullet.width;
wallLeftEdge = lwall.x;
if(bulletRightEdge = wallLeftEdge){
  return  true;
}
return false;
}