/*import Paddle from "./paddle.js";
import inputHandler from "./input.js";
import Ball from "./ball.js";*/

import Game from "./game.js";

let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext("2d");

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

//ctx.fillRect(20,20,100 ,100);

//ctx.clearRect(0,0,800,600);


let game = new Game(GAME_WIDTH, GAME_HEIGHT);



let lastTime = 0;


function gameLoop(timestamp) {
    let deltaTime = timestamp - lastTime;
    lastTime = timestamp;


    ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT)
    game.update(deltaTime);
    game.draw(ctx);


    requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);