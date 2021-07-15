import { getInputDirection } from './input.js'

export  const SNAKE_SPEED = 5 //How many times the snake moves per second
let snakeBody = [
    { x: 11, y: 18, color: 'blue' },
]
let newPiece = 0
const colors = []

export function update() {
    addToSnakeBody()
    addColor()
    const inputDirection = getInputDirection()
    for (let i=snakeBody.length-2; i>=0; i--) {
        snakeBody[i+1] = {...snakeBody[i]}
    }
    snakeBody[0].x += inputDirection.x
    snakeBody[0].y += inputDirection.y
    snakeBody[0].color = 'blue'
}

export function draw(gameboard) {
    snakeBody.forEach( piece => {
        const snakeElement = document.createElement('div')
        snakeElement.style.gridRowStart = piece.y
        snakeElement.style.gridColumnStart = piece.x
        snakeElement.classList.add('snake', piece.color)
        gameboard.appendChild(snakeElement)
    })
}

export function expandSnake(amount, newColor) {
    colors.push(newColor)
    newPiece += amount
}

export function eatFood(position, { ignoreHead= false}= {}) {
    return snakeBody.some((piece, index) => {
        if (ignoreHead && index === 0) return false
        return equalPosition(piece, position)
    })
}

function equalPosition(pos1, pos2) {
    return (pos1.x === pos2.x) && (pos1.y === pos2.y)
}

function addToSnakeBody() {
    for (let i = 0; i<newPiece; i++) {
        snakeBody.push({...snakeBody[snakeBody.length - 1]})
    }
    newPiece = 0
}

function addColor() {
    colors.forEach((color, index) => {
        snakeBody[index].color = color 
    })
}

export function getSnakeHead() {
    return snakeBody[0]
}

export function getSnakeLength() {
    return snakeBody.length
}

export function touchSelf() {
    return eatFood(snakeBody[0], { ignoreHead: true })
}