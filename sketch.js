var box ;
function setup() {
  createCanvas(400,400);
 box = createSprite(200,200,30,30);
}

function draw() 
{
  
  background("black");
  box.shapeColor = "blue";
  

  if(KeyDown("right"))
{
  box.x = box.x + 5;
}
  
if(KeyDown("left"))
{
  box.x = box.x + -5;
}
if(KeyDown("up"))
{
  box.y = box.y - 5;

} 

if(KeyDown("down"))
{
  box.y = box.y + 5;
}


  createEdgeSprites();
  drawSprites();
}




