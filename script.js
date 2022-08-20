const numberBtn = document.querySelectorAll(".number");
const operatorBtn = document.querySelectorAll(".operator");
const screen = document.querySelector(".screen");
const equalsBtn = document.querySelector(".button-equals");

let firstValue = 0;
let chosenOperator = "";
let secondValue = 0;
let result = 0;
let clickedIsEquals = false;

// Adds numbers to the display
numberBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    screen.textContent += btn.value;
  });
});

operatorBtn.forEach((operator) => {
  operator.addEventListener("click", () => {
    clickedIsEquals = false;
    if (operator.classList.contains("add")) {
      if (result) {
        firstValue = result;
        chosenOperator = "+";
        screen.textContent = "";
      } else {
        firstValue = +screen.textContent;
        chosenOperator = "+";
        screen.textContent = "";
      }
    } else if (operator.classList.contains("subtract")) {
      if (result) {
        firstValue = result;
        chosenOperator = "-";
        screen.textContent = "";
      } else {
        firstValue = +screen.textContent;
        chosenOperator = "-";
        screen.textContent = "";
      }
    } else if (operator.classList.contains("multiply")) {
      if (result) {
        firstValue = result;
        chosenOperator = "*";
        screen.textContent = "";
      } else {
        firstValue = +screen.textContent;
        chosenOperator = "*";
        screen.textContent = "";
      }
    } else {
      if (result) {
        firstValue = result;
        chosenOperator = "/";
        screen.textContent = "";
      } else {
        firstValue = +screen.textContent;
        chosenOperator = "/";
        screen.textContent = "";
      }
    }
  });
});

equalsBtn.addEventListener("click", () => {
  if (clickedIsEquals) {
    return;
  }
  secondValue = +screen.textContent;
  result = operator(firstValue, secondValue, chosenOperator);
  screen.textContent = result;
  clickedIsEquals = true;
});

// Functions for arithmatic operations
function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  return a / b;
}

function operator(a, b, op) {
  if (op === "+") {
    return add(a, b);
  } else if (op === "-") {
    return subtract(a, b);
  } else if (op === "*") {
    return multiply(a, b);
  } else if (op === "/") {
    return divide(a, b);
  } else {
    console.log("Invalid Operator!");
  }
}
