import {addSnakeSegment, snakePosition} from "./snakeFunctions.mjs";
import {randomPosition} from "./gridPostion.mjs";
let appleCoords = {x:10,y:19};
let howManySegmentsSnake = 1;
export const updateAppleCoords = () => {
    if (snakePosition(appleCoords)) {
        addSnakeSegment(howManySegmentsSnake);
        appleCoords = randomFoodPosition();
        }
}
export const appleUpdate = (gameField) => {
    const apple = document.createElement("div");
    apple.style.gridColumnStart = appleCoords.x;
    apple.style.gridRowStart = appleCoords.y;
    apple.classList.add("appleSquare");
    gameField.appendChild(apple);
}
const randomFoodPosition = () => {
    let newApplePosition = null;
    while(newApplePosition == null || snakePosition(newApplePosition)){
        newApplePosition = randomPosition();
    }
    return newApplePosition;
}