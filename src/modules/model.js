class Calculator {
  constructor(primaryDisplay, secondaryDisplay) {
    this.primaryDisplay = primaryDisplay
    this.secondaryDisplay = secondaryDisplay

    this.clear()
    this.updateDisplay()
  }

  clear() {
    this.currentOperand = '0'
    this.previousOperand = ''
    this.operation = null
    this.justCalculated = false
  }

  appendNumber(number) {
    if (number === '.' && this.currentOperand.includes('.')) return

    if (this.justCalculated) {
      this.currentOperand = ''
      this.justCalculated = false
    }

    if (this.currentOperand === '0') {
      this.currentOperand = number === '.' ? '0.' : number
    } else {
      this.currentOperand += number
    }
  }

  toggleSign() {
    if (this.currentOperand === '0') return

    this.currentOperand = (parseFloat(this.currentOperand) * -1).toString()
    this.justCalculated = false
  }

  percent() {
    this.currentOperand = (parseFloat(this.currentOperand) / 100).toString()
    this.justCalculated = false
  }

  chooseOperation(operation) {
    if (this.currentOperand === '') return

    if (this.previousOperand !== '') {
      this.calculate()
    }

    this.operation = operation
    this.previousOperand = this.currentOperand
    this.currentOperand = ''
    this.justCalculated = false
  }

  calculate() {
    let result
    const previous = parseFloat(this.previousOperand)
    const current = parseFloat(this.currentOperand)

    if (isNaN(previous) || isNaN(current)) return

    switch (this.operation) {
      case 'add':
        result = previous + current
        break
      case 'subtract':
        result = previous - current
        break
      case 'multiply':
        result = previous * current
        break
      case 'divide':
        result = current === 0 ? 'Error' : previous / current
        break
      default:
        return
    }

    this.currentOperand = result
    this.operation = null
    this.previousOperand = ''
    this.justCalculated = true
  }

  getDisplayNumber(number) {
    const [integerDigits, decimalDigits] = number.toString().split('.')

    let integerDisplay

    if (isNaN(integerDigits)) {
      integerDisplay = ''
    } else {
      integerDisplay = integerDigits.toLocaleString('en-US')
    }

    return decimalDigits != null ? `${integerDisplay}.${decimalDigits}` : integerDisplay
  }

  updateDisplay() {
    this.primaryDisplay.innerText = this.getDisplayNumber(this.currentOperand)
    this.secondaryDisplay.innerText = this.operation
      ? `${this.getDisplayNumber(this.previousOperand)} ${this.getSymbol(this.operation)}`
      : ''
  }

  getSymbol(operation) {
    switch (operation) {
      case 'add':
        return '+'
      case 'subtract':
        return '−'
      case 'multiply':
        return '×'
      case 'divide':
        return '÷'
      default:
        return ''
    }
  }
}

export default Calculator
