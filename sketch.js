var hoop,ball;
var background;
var score, ball1;


function preload(){
    
}

function setup(){

    createCanvas(400,400)
  ball1 = new Ball(100,100,10,10);
  hoop1 = new Hoop(350,200,10,10);
}

function draw (){

    background("black");
    ball1.body.velocityX = 3;
    ball1.display();
    hoop1.display();

    
}

function spawnballs(){

}