import Calculator from './model.js'

const numberButtons = document.querySelectorAll('[data-number]')
const operatorButtons = document.querySelectorAll('[data-action]')

const primaryDisplay = document.querySelector('#primaryDisplay')
const secondaryDisplay = document.querySelector('#secondaryDisplay')

const calculator = new Calculator(primaryDisplay, secondaryDisplay)

export {numberButtons, operatorButtons, primaryDisplay, secondaryDisplay, calculator}
