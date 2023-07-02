// Get references to the calculator screen elements
const expressionDisplay = document.querySelector(".expression");
const resultDisplay = document.querySelector(".result");

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
    } else if (buttonText === "=") {
      // Evaluate the expression
      try {
        result = eval(expression);
        expression = `${expression} =`;
      } catch (error) {
        result = "Error";
        expression = "";
      }
    } else {
      // Append the button value to the expression
      if (buttonText === "*" || buttonText === "/") {
        expression += ` ${buttonText} `;
      } else {
        expression += buttonText;
      }
    }

    // Update the display
    expressionDisplay.textContent = expression;
    resultDisplay.textContent = result;
  });
});
