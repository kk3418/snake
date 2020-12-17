
export function randomGridPosition() {
    return {
        x:  Math.floor(Math.random()*25 + 1),
        y:  Math.floor(Math.random()*25 + 1),
    }
}

export function outsideGrid(position) {
    const { x, y } = position
    return x < 1 || x > 25 || y < 1 || y > 25
}