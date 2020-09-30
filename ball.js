class Ball {
    constructor(x,y,width,height){
        this.body = createSprite(x,y,width,height)
        this. body.shapeColor = "Brown";
        this.body.velocityX=0
    }

    display(){
        drawSprites();
    }

}