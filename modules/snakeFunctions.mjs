import {handleValueChange} from "./userInfluence.mjs";
export const initialSnakeCoords = [{x:15, y:15}];
let newSegments = 0;

// Functions which draws snake
export const drawSnake = (gameField) => {
    initialSnakeCoords.forEach(el => {
        const squareSnakeElement = document.createElement("div");
        squareSnakeElement.style.gridColumnStart = el.x;
        squareSnakeElement.style.gridRowStart = el.y;
        squareSnakeElement.classList.add("snakeSquare");
        gameField.appendChild(squareSnakeElement);
    })
}

// Functions which update snake segments positions
export const updateGame = () => {
    addNewSnakeElement();
    const xAndYValue = handleValueChange();
    for (let i = initialSnakeCoords.length - 2; i >= 0; i--) {
        initialSnakeCoords[i + 1] = {...initialSnakeCoords[i]};
    }
    initialSnakeCoords[0].x += xAndYValue.x;
    initialSnakeCoords[0].y += xAndYValue.y;
}

//Function which set newSegment variable when apple has been eaten
export const addSnakeSegment = (howManySegmentsSnake) => {
    newSegments += howManySegmentsSnake;
}

//Two functions below check snake and apple coords
export const snakePosition = (appleCoords, ignoreHead= false) => {
    return initialSnakeCoords.some((el,index) => {
        if (ignoreHead && index === 0) return false;
        return isPositionEqual(el, appleCoords);
    })
}
const isPositionEqual = (firstPosition, secondPosition) => {
    return firstPosition.x === secondPosition.x && firstPosition.y === secondPosition.y;
}

// Function which push new snake segment to game field
const addNewSnakeElement = () => {
    for (let i = 0; i < newSegments ; i++) {
        initialSnakeCoords.push({...initialSnakeCoords[initialSnakeCoords.length - 1]});
    }
    newSegments = 0;
}

// Function which return snake head coords
export const handleSnakeHead = () => {
    return initialSnakeCoords[0];
}

// Function which check did snake bite itself
export const selfSnakeBite = () => {
    return snakePosition(initialSnakeCoords[0], {ignoreSnakeHead: true});
}