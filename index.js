const expressionDisplay = document.querySelector(".expression");
const resultDisplay = document.querySelector(".result");

const buttons = document.querySelectorAll(".button");

let expression = "";
let result = "";

let lastButtonClicked = null;

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const buttonText = button.textContent;

    if (buttonText === "C") {
      expression = "";
      result = "0";
      lastButtonClicked = null;
    } else if (buttonText === "CE") {
      expression = expression.slice(0, -1);
      lastButtonClicked = null;
    } else if (buttonText === "=") {
      try {
        result = eval(expression);
        expression = `${expression}`;
        lastButtonClicked = null;
      } catch (error) {
        result = "Error";
        expression = "";
        lastButtonClicked = null;
      }
    } else {
      if (
        lastButtonClicked &&
        (lastButtonClicked === "+" ||
          lastButtonClicked === "-" ||
          lastButtonClicked === "*" ||
          lastButtonClicked === "/")
      ) {
        if (buttonText === "+" || buttonText === "-" || buttonText === "*" || buttonText === "/") {
          expression = expression.slice(0, -2);
        } else {
          expression = expression.slice(0, -1);
        }
      }

      expression += ` ${buttonText} `;
      lastButtonClicked = buttonText;
    }

    expressionDisplay.textContent = expression;
    resultDisplay.textContent = result;
  });
});
