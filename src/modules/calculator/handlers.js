import {calculator} from './variables.js'

function handleClickButton(e) {
  const button = e.currentTarget
  if (button.dataset.number !== undefined) {
    calculator.appendNumber(button.dataset.number)
  } else {
    handleAction(button.dataset.action)
  }
  calculator.updateDisplay()
}

function handleAction(action) {
  switch (action) {
    case 'clear':
      calculator.clear()
      break
    case 'toggle-sign':
      calculator.toggleSign()
      break
    case 'percent':
      calculator.percent()
      break
    case 'add':
    case 'subtract':
    case 'multiply':
    case 'divide':
      calculator.chooseOperation(action)
      break
    case 'equals':
      calculator.calculate()
      break
    default:
      return
  }
}

export {handleClickButton, handleAction}
