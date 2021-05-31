import {handleValueChange} from "./userInfluence.mjs";
export const initialSnakeCoords = [{x:15, y:15}];
let newSegments = 0;
export const drawSnake = (gameField) => {
    initialSnakeCoords.forEach(el => {
        const squareSnakeElement = document.createElement("div");
        squareSnakeElement.style.gridColumnStart = el.x;
        squareSnakeElement.style.gridRowStart = el.y;
        squareSnakeElement.classList.add("snakeSquare");
        gameField.appendChild(squareSnakeElement);
    })
}
export const updateGame = () => {
    addNewSnakeElement();
    const xAndYValue = handleValueChange();
    for (let i = initialSnakeCoords.length - 2; i >= 0; i--) {
        initialSnakeCoords[i + 1] = {...initialSnakeCoords[i]};
    }
    initialSnakeCoords[0].x += xAndYValue.x;
    initialSnakeCoords[0].y += xAndYValue.y;
}
export const addSnakeSegment = (howManySegmentsSnake) => {
    newSegments += howManySegmentsSnake;
}
export const snakePosition = (appleCoords, ignoreHead= false) => {
    return initialSnakeCoords.some((el,index) => {
        if (ignoreHead && index === 0) return false;
        return isPositionEqual(el, appleCoords);
    })
}
const isPositionEqual = (firstPosition, secondPosition) => {
    return firstPosition.x === secondPosition.x && firstPosition.y === secondPosition.y;
}
const addNewSnakeElement = () => {
    for (let i = 0; i < newSegments ; i++) {
        initialSnakeCoords.push({...initialSnakeCoords[initialSnakeCoords.length - 1]});
    }
    newSegments = 0;
}
export const handleSnakeHead = () => {
    return initialSnakeCoords[0];
}
export const selfSnakeBite = () => {
    return snakePosition(initialSnakeCoords[0], {ignoreSnakeHead: true});
}