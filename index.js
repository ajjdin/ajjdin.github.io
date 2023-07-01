// Get references to the calculator screen elements
const expressionDisplay = document.querySelector(".expression");
const resultDisplay = document.querySelector(".result");
const screen = document.querySelector(".screen");

// Get references to all the buttons
const buttons = document.querySelectorAll(".button");

// Store the current expression and result
let expression = "";
let result = "";

// Add event listeners to the buttons
buttons.forEach(button => {
  button.addEventListener("click", () => {
    const buttonText = button.textContent;

    if (buttonText === "C") {
      // Clear the expression and result
      expression = "";
      result = "";
    } else if (buttonText === "CE") {
      // Remove the last character from the expression
      expression = expression.slice(0, -1);
    } else if (buttonText === "=") {
      // Evaluate the expression
      try {
        result = eval(expression);
        expression = result.toString();
      } catch (error) {
        result = "Error";
        expression = "";
      }
    } else {
      // Append the button value to the expression
      expression += buttonText;
    }

    // Update the display
    expressionDisplay.textContent = formatExpression(expression);
    resultDisplay.textContent = result;
  });
});

// Function to format the expression
function formatExpression(expression) {
  // Replace the multiplication symbol with "*"
  expression = expression.replace(/×/g, "*");
  
  // Replace the division symbol with "/"
  expression = expression.replace(/÷/g, "/");

  // Return the formatted expression
  return expression;
}
