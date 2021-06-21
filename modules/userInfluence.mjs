let xAndYValue = {x:0,y:0};
let lastXAndYValue = {x:0, y:0};
const timeElement = document.querySelector("[data-time='time'] > span");
let firstUserMove = true;
let timerInterval = null;
let time = 0;
// Function which change snake movement directory
window.addEventListener("keydown", (event) => {
    switch (event.key) {
        case "ArrowUp":
            if (lastXAndYValue.y === 1) return;
            xAndYValue = {x:0, y:-1};
            break;
        case "ArrowDown":
            if (lastXAndYValue.y === -1) return;
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