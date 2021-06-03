let xAndYValue = {x:0,y:0};
let lastXAndYValue = {x:0, y:0};

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
})

// Function which return coords after update
export const handleValueChange = () => {
    lastXAndYValue = xAndYValue;
    return xAndYValue;
}