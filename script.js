//the display value is empty, the user fills it 
let displayValue = '';

function appendToDisplay(value) {
    //displays the value entered by the user
    displayValue = displayValue + value;
    document.getElementById('display').value = displayValue;
}

function calculate() {
    try {
        //check with the parseAndCalculate to check logic 
        const result = parseAndCalculate(displayValue);
        //result is not null
        if (result !== null) {
            //display value is the result 
          displayValue = result;
          document.getElementById('display').value = displayValue;
        } else {
            //if not the result show error
          document.getElementById('display').value = 'Error';
        }
      } catch (error) {
        document.getElementById('display').value = 'Error';
      }
}

//clear function 
function clearDisplay() {
    //clear the display box
    displayValue = '';
    //clears the elements in the text box
    document.getElementById('display').value = displayValue;
}

function toNegative() {
    //To show a negative number display the - sign 
    //starts with (-)
    if (displayValue.startsWith('-')) {
        displayValue = displayValue.substring(1);
    } else {
        //display the negative value
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
