import {addSnakeSegment, snakePosition} from "./snakeFunctions.mjs";
import {randomPosition} from "./gridPostion.mjs";
const scoreElement = document.querySelector("[data-score='score'] > span");
let appleCoords = {x:10,y:19};
let howManySegmentsSnake = 1;
let howManyApplesHasBeenEaten = 0;

// Function which update new apple coords and score
export const updateAppleCoords = () => {
    if (snakePosition(appleCoords)) {
        addSnakeSegment(howManySegmentsSnake);
        appleCoords = randomFoodPosition();
        howManyApplesHasBeenEaten++
        scoreElement.innerText = howManyApplesHasBeenEaten;
    }
}

// Function which create apple
export const appleUpdate = (gameField) => {
    const apple = document.createElement("div");
    apple.classList.add("appleSquare");
    apple.style.gridColumnStart = appleCoords.x;
    apple.style.gridRowStart = appleCoords.y;
    gameField.appendChild(apple);
}

// Function return random coords for new apple
const randomFoodPosition = () => {
    let newApplePosition = null;
    while (newApplePosition == null || snakePosition(newApplePosition)) {
        newApplePosition = randomPosition();
    }
    return newApplePosition;
}