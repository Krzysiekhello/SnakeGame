document.addEventListener('DOMContentLoaded', () => {
    const gameField = document.querySelector("[data-gameField='gameField']")
    let squareIndex = 0
    let randomIndexElementWhichGonnaBeApple = Math.floor(Math.random() * 315)
    const randomIndexElementWhereSnakeIsGoingToAppear = Math.floor(Math.random() * 315)
    if (randomIndexElementWhichGonnaBeApple === randomIndexElementWhereSnakeIsGoingToAppear) {
        randomIndexElementWhichGonnaBeApple = randomIndexElementWhichGonnaBeApple - 1
    }
    // Loop which add div elements into gameField element

    for (let i = 0; i < 315 ; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.setAttribute("id", `${squareIndex}`);
        if (i === randomIndexElementWhichGonnaBeApple) {
            square.classList.add("apple");
        }
        if (i === randomIndexElementWhereSnakeIsGoingToAppear) {
            square.classList.add("snake");
        }
        gameField.appendChild(square);
        squareIndex += 1
    }
});