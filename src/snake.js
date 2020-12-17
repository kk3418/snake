import { getInputDirection } from './input.js'

export  const SNAKE_SPEED = 5 //How many times the snake moves per second
const snakeBody = [
    { x: 11, y: 18 },
]
let newPiece = 0

export function update() {
    addToSnakeBody()
    const inputDirection = getInputDirection()
    for (let i=snakeBody.length-2; i>=0; i--) {
        snakeBody[i+1] = {...snakeBody[i]}
    }
    snakeBody[0].x += inputDirection.x
    snakeBody[0].y += inputDirection.y
}

export function draw(gameboard) {
    snakeBody.forEach( piece => {
        const snakeElement = document.createElement('div')
        snakeElement.style.gridRowStart = piece.y
        snakeElement.style.gridColumnStart = piece.x
        snakeElement.classList.add('snake')
        gameboard.appendChild(snakeElement)
    })
}

export function expandSnake(amount) {
    newPiece += amount
}

export function eatFood(position, { ignoreHead= false}= {}) {
    return snakeBody.some((piece, index) => {
        if (ignoreHead && index === 0) return false
        return equalPosition(piece, position)
    })
}

function equalPosition(pos1, pos2) {
    if((pos1.x === pos2.x) && (pos1.y === pos2.y)) return true
    return false
}

function addToSnakeBody() {
    for (let i = 0; i<newPiece; i++) {
        snakeBody.push({...snakeBody[snakeBody.length - 1]})
    }
    newPiece = 0
}

export function getSnakeHead() {
    return snakeBody[0]
}

export function touchSelf() {
    return eatFood(snakeBody[0], { ignoreHead: true })
}