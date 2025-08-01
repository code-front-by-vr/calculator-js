import './styles/main.scss'
import {numberButtons, operatorButtons, themeToggle} from './modules/variables'
import {handleClickButton, handleClickThemeToggle} from './modules/handlers'
import {initializeTheme} from './modules/helpers'

initializeTheme()

numberButtons.forEach(button => {
  button.addEventListener('click', handleClickButton)
})

operatorButtons.forEach(button => {
  button.addEventListener('click', handleClickButton)
})

themeToggle.addEventListener('click', handleClickThemeToggle)
