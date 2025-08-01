import {calculator} from './variables.js'
import {getThemeFromStorage, setThemeToStorage} from './storage.js'
import {applyTheme} from './helpers.js'

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

function handleClickThemeToggle() {
  const currentTheme = getThemeFromStorage()
  const newTheme = currentTheme === 'light' ? 'dark' : 'light'

  applyTheme(newTheme)
  setThemeToStorage(newTheme)
}

export {handleClickButton, handleAction, handleClickThemeToggle}
