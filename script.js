import {drawSnake, updateGame,selfSnakeBite,handleSnakeHead} from "./snakeFunctions.mjs";
import {appleUpdate, updateAppleCoords} from "./appleFunctions.mjs";
import {outsideGrid} from "./gridPostion.mjs";
export const gameField = document.querySelector("[data-gameField='gameField']");
let lastRenderTime = 0;
let gameOver = false;
const main = (currentTime) => {
    if (gameOver) {
        if (confirm("Lose, press Ok for next round")) {
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
const snakeDeath = () => {
     gameOver = outsideGrid(handleSnakeHead()) || selfSnakeBite();
}
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
