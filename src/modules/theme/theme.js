import {getThemeFromStorage, setThemeToStorage} from './storage.js'
import {themeToggle} from './variables.js'

function applyTheme(theme) {
  const html = document.documentElement
  html.setAttribute('data-theme', theme)
  themeToggle.textContent = theme === 'light' ? '🌙' : '☀️'
}

function initializeTheme() {
  const savedTheme = getThemeFromStorage()
  applyTheme(savedTheme)
}

function handleClickThemeToggle() {
  const currentTheme = getThemeFromStorage()
  const newTheme = currentTheme === 'light' ? 'dark' : 'light'

  applyTheme(newTheme)
  setThemeToStorage(newTheme)
}

export {applyTheme, initializeTheme, handleClickThemeToggle}
