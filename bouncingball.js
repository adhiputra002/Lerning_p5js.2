//variable ukuran area bola memantul
let x = 320;
let y = 180;

//atur speed
let xspeed = 20;
let yspeed = 2;

//ukuran bola
let r = 30;
function setup(){
  createCanvas(640,360);
}
function draw() {
  background(0);
  ellipse(x,y ,r*2,r*2);
  x += xspeed;
  y += yspeed;
  if(x > width -r||x <r ){
  xspeed = -xspeed;
  }
   if(x > width -r||y <r ){
  yspeed = -yspeed;
   }
}
   