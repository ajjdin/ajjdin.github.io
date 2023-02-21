// Get references to the elements
const screen = document.getElementById("screen");
const behindScreen = document.getElementById("behind-screen");
const buttons = document.querySelectorAll("#buttons");
const clearButton = document.getElementById("clear");

// Initialize variables
let currentNumber = "";
let currentOperator = null;
let firstNumber = null;

// Add event listeners to the buttons
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (value === "AC") {
      clear();
    } else if (value === "+/-") {
      negate();
    } else if (value === "%") {
      percentage();
    } else if (
      value === "+" ||
      value === "-" ||
      value === "×" ||
      value === "÷"
    ) {
      setOperator(value);
    } else if (value === "=") {
      calculate();
    } else {
      addDigit(value);
    }
  });
});

// Add event listener to the clear button
clearButton.addEventListener("click", () => {
  clear();
});

// Helper functions
function clear() {
  currentNumber = "";
  currentOperator = null;
  firstNumber = null;
  updateScreen("");
  updateBehindScreen("");
}

function negate() {
  currentNumber = String(-parseFloat(currentNumber));
  updateScreen(currentNumber);
}

function percentage() {
  currentNumber = String(parseFloat(currentNumber) / 100);
  updateScreen(currentNumber);
}

function setOperator(operator) {
  currentOperator = operator;
  firstNumber = currentNumber;
  currentNumber = "";
}

function addDigit(digit) {
  currentNumber += digit;
  updateScreen(currentNumber);
}

function calculate() {
  const num1 = parseFloat(firstNumber);
  const num2 = parseFloat(currentNumber);

  let result;
  switch (currentOperator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "×":
      result = num1 * num2;
      break;
    case "÷":
      result = num1 / num2;
      break;
    default:
      result = num2;
  }

  currentNumber = String(result);
  updateScreen(currentNumber);
}

function updateScreen(value) {
  screen.value = value;
}

function updateBehindScreen(value) {
  behindScreen.value = value;
}
