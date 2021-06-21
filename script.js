import {drawSnake, updateGame,selfSnakeBite,handleSnakeHead} from "./modules/snakeFunctions.mjs";
import {appleUpdate, updateAppleCoords} from "./modules/appleFunctions.mjs";
import {outsideGrid} from "./modules/gridPostion.mjs";
const gameField = document.querySelector("[data-gameField='gameField']");
let lastRenderTime = 0;
let gameOver = false;

// Function which render application
const main = (currentTime) => {
    if (gameOver) {
        if (confirm("You Lose, press 'Ok' for next round")) {
            window.location.reload();
        }
    }
    window.requestAnimationFrame(main);
    const secsFromLastRender = (currentTime - lastRenderTime) / 1000;
    if (secsFromLastRender <  0.1) return;
    lastRenderTime = currentTime;
    draw();
    update();
}
window.requestAnimationFrame(main);

//Function which change gameOver variable when snake hit a wall of bite itself
const snakeDeath = () => {
     gameOver = outsideGrid(handleSnakeHead()) || selfSnakeBite();
}

// Two main functions which contain other ones
const draw = () => {
    gameField.innerHTML = '';
    drawSnake(gameField);
    appleUpdate(gameField);
}

const update = () => {
    updateGame();
    updateAppleCoords();
    snakeDeath();
}
