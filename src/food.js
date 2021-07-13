import { eatFood, expandSnake } from './snake.js'
import { randomGridPosition, randomGridColor } from './grid.js'

const EXPANSION = 1
let food = generateFood()

export function update() {
    if(eatFood(food)) {
        expandSnake(EXPANSION)
        food = generateFood()
    }
}

export function draw(gameboard) {
    const foodElement = document.createElement('div')
    foodElement.style.gridRowStart = food.y
    foodElement.style.gridColumnStart = food.x
    foodElement.classList.add('food', food.color)
    gameboard.appendChild(foodElement)
}

function generateFood() {
    let newFoodPosition
    let newFoodColor
    while (newFoodPosition === undefined || eatFood(newFoodPosition)) {
        newFoodPosition = randomGridPosition()
        newFoodColor = randomGridColor()
    }
    return { ...newFoodPosition, color: newFoodColor }
}
