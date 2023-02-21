// Get references to the elements
const screen = document.getElementById("screen");
const behindScreen = document.getElementById("behind-screen");
const buttons = document.querySelectorAll("#buttons");
const clearButton = document.getElementById("clear");

// Initialize variables
let currentNumber = "";
let currentOperator = null;
let firstNumber = null;
let equalsClicked = false;

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
      equalsClicked = true;
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
  equalsClicked = false;
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
  updateBehindScreen(`${firstNumber} ${currentOperator}`);
}

function calculate() {
  let result;
  const secondNumber = currentNumber;
  if (currentOperator === "+") {
    result = parseFloat(firstNumber) + parseFloat(secondNumber);
  } else if (currentOperator === "-") {
    result = parseFloat(firstNumber) - parseFloat(secondNumber);
  } else if (currentOperator === "×") {
    result = parseFloat(firstNumber) * parseFloat(secondNumber);
  } else if (currentOperator === "÷") {
    result = parseFloat(firstNumber) / parseFloat(secondNumber);
  }
  currentNumber = String(result);
  updateScreen(currentNumber);
  updateBehindScreen("");
  currentOperator = null;
  firstNumber = null;
}

function addDigit(digit) {
  if (equalsClicked) {
    currentNumber = "";
    equalsClicked = false;
  }
  currentNumber += digit;
  updateScreen(currentNumber);
}

function updateScreen(value) {
  screen.value = value;
}

function updateBehindScreen(value) {
  behindScreen.value = value;
}
