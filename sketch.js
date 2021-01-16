var bullet,wall;
var speed,weight;
var collide;
var thick;
function setup() {
  createCanvas(1600,1000);
  speed=random(223,321);
  weight=random(30,52);
  thick=random(22,83)
  bullet=createSprite(50,200,20,20);
  wall=createSprite(1000,200,17,height/2);
  bullet.velocityX=speed;  
wall.shapeColor=color("black");  
}

function draw() {
  background(255,255,255);  
  if(wall.x-bullet.x < (bullet.width+wall.width)/2)
  {
    bullet.velocityX=0;
    var deformation=0.5*weight*speed*speed/thick*thick*thick;
      if(deformation>180)
        {
          wall.shapeColour=color("voilet");
        }
       if(deformation=12.43)
        {
         wall.shapeColor=color("Red");
        }
        if(deformation=3.68)
        {
          wall.shapeColor=color("Green");
        }
  }
  text("If the Color is :",500,400);
  text("Orange=Good",500,420);
  text("Voilet=Lethal",500,440);
  bullet.collide(wall);
  drawSprites();
}