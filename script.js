let displayValue = '';

function appendToDisplay(value) {
    displayValue = displayValue + value;
    document.getElementById('display').value = displayValue;
}

function calculate() {
    try {
        //check with the parseAndCalculate to check logic 
        const result = parseAndCalculate(displayValue);
        if (result !== null) {
          displayValue = result;
          document.getElementById('display').value = displayValue;
        } else {
          document.getElementById('display').value = 'Error';
        }
      } catch (error) {
        document.getElementById('display').value = 'Error';
      }
}

function clearDisplay() {
    displayValue = '';
    document.getElementById('display').value = displayValue;
}

function toNegative() {
    //To show a negative number display the - sign 
    if (displayValue.startsWith('-')) {
        displayValue = displayValue.substring(1);
    } else {
        displayValue = `-${displayValue}`;
    }
    document.getElementById('display').value = displayValue;
}

function parseAndCalculate(expression) {
  try {
    // Implement your parsing logic to handle parentheses, order of operations, etc.
    // Explicitly check for division by zero
    if (expression.includes('/0')) {
      return 'Error: Division by zero';
    }

    // Perform the calculation and return the result
    return eval(expression);
  } catch (error) {
    return 'Error: Invalid expression'; // Indicates an error during parsing or calculation
  }
}