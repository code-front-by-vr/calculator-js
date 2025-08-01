import {getThemeFromStorage} from './storage.js'
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

export {applyTheme, initializeTheme}
