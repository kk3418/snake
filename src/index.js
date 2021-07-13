import { SNAKE_SPEED, update as updateSnake, draw as drawSnake, getSnakeHead, touchSelf } from './snake.js'
import { update as updateFood, draw as drawFood } from './food.js'
import { outsideGrid } from './grid.js'

let lastRenderTime = 0
let gameOver = false
const gameboard = document.getElementById('game-board')
const scoreBox = document.getElementById('score-box')

function main(currentTime) {
    if (gameOver) {
        if (confirm(`Game Over ~`)) {
            window.location = '/' // reflash page
        }
        return 
    }
    window.requestAnimationFrame(main)
    const sinceLastRenderTime = (currentTime - lastRenderTime) /1000
    
    if (sinceLastRenderTime < 1/SNAKE_SPEED) return
    lastRenderTime = currentTime
    
    update()
    draw() 
    
    console.log('render')
}

// Test the function calculateStore
// window.testCalculateScore = calculateScore

window.requestAnimationFrame(main)

function update(){
    const snakeBodyLength = updateSnake()
    const score = calculateScore(snakeBodyLength)
    scoreBox.innerHTML = `SCORE : ${score}`
    updateFood()
    checkGameOver()
}

function calculateScore(amount) {
    let rate = 1
    const score = amount
    while (amount >= 10) {
        rate += 1
        amount -= 10
    }
    return rate * score
}

function draw() {
    gameboard.innerHTML = ''
    drawSnake(gameboard)
    drawFood(gameboard)
}

function checkGameOver() {
    gameOver = outsideGrid(getSnakeHead()) || touchSelf()
}
