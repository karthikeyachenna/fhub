function setup()
{
    canvas=createCanvas(500,450);
    canvas.center();
     
}
img="";
 function preload()
 {
    img=loadImage("dog_cat.jpg");
 }

 function draw()
 {
    image(img,0,0,500,450);
    fill("black");
    text("dog",45,75);
    noFill();
    stroke("#03fc6b");
    rect(30,60,225,350);
 }