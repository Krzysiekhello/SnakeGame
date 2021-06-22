let xAndYValue = {x:0,y:0};
let lastXAndYValue = {x:0, y:0};
let firstUserMove = true;
export let timerInterval = null;
let time = 0;
const timeElement = document.querySelector("[data-time='time'] > span");


// Function which change snake movement directory
window.addEventListener("keydown", (event) => {
    switch (event.key) {
        case "ArrowUp":
            if (lastXAndYValue.y === 1) return;
            xAndYValue = {x:0, y:-1};
            break;
        case "ArrowDown":
            // snakeHead[0].style.transform = 'rotate('+180+'deg)';
            xAndYValue = {x:0, y:1};
            break;
        case "ArrowRight":
            if (lastXAndYValue.x === -1) return;
            xAndYValue = {x:1, y:0};
            break;
        case "ArrowLeft":
            if (lastXAndYValue.x === 1) return;
            xAndYValue = {x:-1, y:0};
            break;
    }
    if (firstUserMove) {
        startTimer ();
        firstUserMove = false;
    }
});

// Function which return coords after update
export const handleValueChange = () => {
    lastXAndYValue = xAndYValue;
    return xAndYValue;
}

const startTimer = () => {
    timerInterval = setInterval(() => {
        time++
        timeElement.innerText = time;
    }, 1000)
}