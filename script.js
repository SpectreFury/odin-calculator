const numberBtn = document.querySelectorAll(".number");
const operatorBtn = document.querySelectorAll(".operator");
const screen = document.querySelector(".screen");
const equalsBtn = document.querySelector(".button-equals");
const allClearBtn = document.querySelector(".all-clear");
const clearBtn = document.querySelector(".clear");
const periodBtn = document.querySelector(".period");

let firstValue = 0;
let chosenOperator = "";
let secondValue = 0;
let result = 0;
let clickedIsEquals = false;

// Keyboard Handler
const numberKeys = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const operationKeys = ["+", "-", "/", "*"];

window.addEventListener("keydown", (e) => {
  if (e.key === ".") {
    if (screen.textContent.includes(".")) {
      return;
    }
    screen.textContent += ".";
  }

  if (e.key === "Backspace") {
    if (!screen.textContent) {
      console.log("Empty sadly");
    } else {
      screen.textContent = screen.textContent.slice(
        0,
        screen.textContent.length - 1
      );
    }
  }
  operationKeys.forEach((key) => {
    if (e.key === key) {
      clickedIsEquals = false;
      if (key === "+") {
        if (result) {
          firstValue = result;
          chosenOperator = "+";
          screen.textContent = "";
        } else {
          firstValue = +screen.textContent;
          chosenOperator = "+";
          screen.textContent = "";
        }
      } else if (key === "-") {
        if (result) {
          firstValue = result;
          chosenOperator = "-";
          screen.textContent = "";
        } else {
          firstValue = +screen.textContent;
          chosenOperator = "-";
          screen.textContent = "";
        }
      } else if ((key = "*")) {
        if (result) {
          firstValue = result;
          chosenOperator = "*";
          screen.textContent = "";
        } else {
          firstValue = +screen.textContent;
          chosenOperator = "*";
          screen.textContent = "";
        }
      } else if (key === "/") {
        if (result) {
          firstValue = result;
          chosenOperator = "/";
          screen.textContent = "";
        } else {
          firstValue = +screen.textContent;
          chosenOperator = "/";
          screen.textContent = "";
        }
      } else {
        return;
      }
    }
  });

  numberKeys.forEach((key) => {
    if (e.key === key) {
      if (screen.textContent.length > 22) {
        return;
      }
      if (clickedIsEquals) {
        allClear();
        clickedIsEquals = false;
      }
      screen.textContent += key;
    }
  });
});

//Period Btn
periodBtn.addEventListener("click", () => {
  if (screen.textContent.includes(".")) {
    return;
  }
  screen.textContent += ".";
});

// Adds numbers to the display
numberBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (screen.textContent.length > 22) {
      return;
    }
    if (clickedIsEquals) {
      allClear();
      clickedIsEquals = false;
    }
    screen.textContent += btn.value;
  });
});

// All Clear Button
allClearBtn.addEventListener("click", allClear);
clearBtn.addEventListener("click", () => {
  if (!screen.textContent) {
    console.log("Empty sadly");
  } else {
    screen.textContent = screen.textContent.slice(
      0,
      screen.textContent.length - 1
    );
  }
});

function allClear() {
  screen.textContent = "";
  firstValue = 0;
  secondValue = 0;
  result = 0;
  chosenOperator = "";
}

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
