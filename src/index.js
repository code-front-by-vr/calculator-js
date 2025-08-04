import './styles/main.scss'
import {numberButtons, operatorButtons} from './modules/calculator/variables.js'
import {handleClickButton} from './modules/calculator/handlers.js'
import {initializeTheme, handleClickThemeToggle} from './modules/theme/theme.js'
import {themeToggle} from './modules/theme/variables.js'

initializeTheme()

numberButtons.forEach(button => {
  button.addEventListener('click', handleClickButton)
})

operatorButtons.forEach(button => {
  button.addEventListener('click', handleClickButton)
})

themeToggle.addEventListener('click', handleClickThemeToggle)
