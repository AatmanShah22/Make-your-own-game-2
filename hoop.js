class Hoop{
    constructor(x,y,width,height){
    this.body = createSprite(x,y,width,height)
    this.body.shapeColor = "White";
    this.body.velocityY = 2;
    }
    display(){
        drawSprites();
    }
}

