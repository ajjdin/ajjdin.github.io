const expressionDisplay = document.querySelector(".expression");
const resultDisplay = document.querySelector(".result");

const buttons = document.querySelectorAll(".button");

let expression = "";
let result = "";

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const buttonText = button.textContent;

    if (buttonText === "C") {
      expression = "";
      result = "";
    } else if (buttonText === "CE") {
      expression = expression.slice(0, -1);
    } else if (buttonText === "=") {
      try {
        result = eval(expression);
        expression = `${expression} =`;
      } catch (error) {
        result = "Error";
        expression = "";
      }
    } else {
      if (buttonText === "*" || buttonText === "/") {
        expression += ` ${buttonText} `;
      } else {
        expression += buttonText;
      }
    }

    expressionDisplay.textContent = expression;
    resultDisplay.textContent = result;
  });
});
