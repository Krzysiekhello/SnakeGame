import {drawSnake, updateGame,selfSnakeBite,handleSnakeHead} from "./modules/snakeFunctions.mjs";
import {appleUpdate, updateAppleCoords} from "./modules/appleFunctions.mjs";
import {outsideGrid} from "./modules/gridPostion.mjs";
import {timerInterval} from "./modules/userInfluence.mjs";
const gameField = document.querySelector("[data-gameField='gameField']");
const resultTable = document.querySelector("[data-resultTable='resultTable']");
const restartGameButton = document.querySelector("[data-resultTable='resultTable'] > button");
const resultTableScore = document.querySelector("[data-resultTableScore='resultTableScore'] > span");
const resultTableTime = document.querySelector("[data-resultTableTime='resultTableTime'] > span");
const gameScore = document.querySelector("[data-gameScore='gameScore']");
let lastRenderTime = 0;
let gameOver = false;

// Function which render application
const main = (currentTime) => {
    if (gameOver) {
        gameSummary()
    } else {
        window.requestAnimationFrame(main);
        const secsFromLastRender = (currentTime - lastRenderTime) / 1000;
        if (secsFromLastRender < 0.1) return;
        lastRenderTime = currentTime;
        draw();
        update();
    }
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
restartGameButton.addEventListener("click", () => {
    window.location.reload();
})

// Function which handle style changes when user fail
const gameSummary = () => {
    resultTableScore.textContent = document.querySelector("[data-score='score'] > span").textContent;
    resultTableTime.textContent = document.querySelector("[data-time='time'] > span").textContent;
    gameScore.style.opacity = "0";
    gameScore.style.transition = "0.5s";
    gameScore.style.backgroundColor = "#fff";
    resultTable.style.display = "block";
    clearInterval(timerInterval)
}