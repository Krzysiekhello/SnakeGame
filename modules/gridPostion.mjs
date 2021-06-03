// Function which create random x and y coords for an apple
export const randomPosition = () => {
    return {
        x: Math.floor(Math.random() * 31),
        y: Math.floor(Math.random() * 31)
    }
}

// Function which check did snake go outside grid
export const outsideGrid = (position) => {
    return position.x < 1 || position.x > 31 || position.y < 1 || position.y > 31;
}