import { eatFood, expandSnake } from './snake.js'
import { randomGridPosition, randomGridColor } from './grid.js'

const EXPANSION = 1
let food = generateFood()
let foodColor = randomGridColor()

export function update() {
    if(eatFood(food)) {
        expandSnake(EXPANSION, foodColor)
        foodColor = randomGridColor()
        food = generateFood()
    }
}

export function draw(gameboard) {
    const foodElement = document.createElement('div')
    foodElement.style.gridRowStart = food.y
    foodElement.style.gridColumnStart = food.x
    foodElement.classList.add('food', foodColor)
    gameboard.appendChild(foodElement)
}

function generateFood() {
    let newFoodPosition
    while (newFoodPosition === undefined || eatFood(newFoodPosition)) {
        newFoodPosition = randomGridPosition()
       
    }
    return newFoodPosition
}
