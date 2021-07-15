import { SNAKE_SPEED, update as updateSnake, draw as drawSnake, getSnakeHead, touchSelf, getSnakeLength } from './snake.js'
import { update as updateFood, draw as drawFood } from './food.js'
import { outsideGrid } from './grid.js'

let lastRenderTime = 0
let gameOver = false
let lastSnakeLength = 1
let score = 0
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
window.testCalculateScore = calculateScore

window.requestAnimationFrame(main)

function update(){
    updateSnake()
    updateFood()
    if (lastSnakeLength < getSnakeLength()) {
        score += calculateScore(getSnakeLength() - 1)
        lastSnakeLength = getSnakeLength()
    }
    scoreBox.innerHTML = `SCORE : ${score}`
    checkGameOver()
}

function calculateScore(level) {
    const rate = Math.floor(level / 10) + 1
    return rate
}

function draw() {
    gameboard.innerHTML = ''
    drawSnake(gameboard)
    drawFood(gameboard)
}

function checkGameOver() {
    gameOver = outsideGrid(getSnakeHead()) || touchSelf()
}
