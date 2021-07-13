
export function randomGridPosition() {
    return {
        x:  Math.floor(Math.random()*25 + 1),
        y:  Math.floor(Math.random()*25 + 1),
    }
}

export function randomGridColor() {
    const colors = ['yellow', 'green', 'red']
    const random = Math.floor(Math.random() * 10) // 0 - 9
    let check = 0
    if (random < 3) check = 0
    else if (random >=3 && random < 6) check = 1
    else check = 2
    return colors[check]
}

export function outsideGrid(position) {
    const { x, y } = position
    return x < 1 || x > 25 || y < 1 || y > 25
}