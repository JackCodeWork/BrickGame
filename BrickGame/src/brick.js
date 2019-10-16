import {detectCollision} from "./collision.js";

export default class Brick{
    constructor(game, poistion){

        this.image = document.getElementById('img_brick');



        this.game = game;


        this.position = poistion;
        this.width = 80;
        this.height = 24;

        this.mark = false;

    }


    update(){
        if(detectCollision(this.game.ball, this)){
            this.game.ball.speed.y = - this.game.ball.speed.y;

            this.mark = true;
        }
    }


    draw(ctx){
        ctx.drawImage(
            this.image,
            this.position.x,
            this.position.y,
            this.width,
            this.height
        );

    }
}