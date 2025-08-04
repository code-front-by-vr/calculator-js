const storageKey = 'theme'

function getThemeFromStorage() {
  const data = localStorage.getItem(storageKey)
  return data ? JSON.parse(data) : 'dark'
}

function setThemeToStorage(newTheme) {
  localStorage.setItem(storageKey, JSON.stringify(newTheme))
}

export {getThemeFromStorage, setThemeToStorage}
