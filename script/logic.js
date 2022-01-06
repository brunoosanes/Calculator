//basic operators functions
const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const multiply = function (num1, num2) {
  return num1 * num2;
};

const divide = function (num1, num2) {
  return num1 / num2;
};

const operate = function (operator, num1, num2) {
  return operator(num1, num2);
};

//selecting HTML element with DOM
const container = document.querySelector(".container");
const display = document.querySelector(".display");
const minorDisplay = document.querySelector(".minorDisplay");
const mainDisplay = document.querySelector(".mainDisplay");
const clearBtn = document.querySelector(".clearBtn");
const deleteBtn = document.querySelector(".deleteBtn");
const sevenBtn = document.querySelector(".sevenBtn");
const eightBtn = document.querySelector(".eightBtn");
const nineBtn = document.querySelector(".nineBtn");
const divideBtn = document.querySelector(".divideBtn");
const fourBtn = document.querySelector(".fourBtn");
const fiveBtn = document.querySelector(".fiveBtn");
const sixBtn = document.querySelector(".sixBtn");
const multiplyBtn = document.querySelector(".multiplyBtn");
const oneBtn = document.querySelector(".oneBtn");
const twoBtn = document.querySelector(".twoBtn");
const threeBtn = document.querySelector(".threeBtn");
const subtractBtn = document.querySelector(".subtractBtn");
const dotBtn = document.querySelector(".dotBtn");
const zeroBtn = document.querySelector(".zeroBtn");
const equalsBtn = document.querySelector(".equalsBtn");
const addBtn = document.querySelector(".addBtn");

//functions
const showInDisplay = function (e) {
  if (mainDisplay.textContent == 0) {
    mainDisplay.textContent = "";
  }

  if (e.target.textContent == 0 && minorDisplay.textContent.includes("÷")) {
    alert("Sorry, you can't divide by zero!");
    mainDisplay.textContent = "0";
  } else
    {mainDisplay.textContent = `${mainDisplay.textContent}${e.target.textContent}`};

    checkIfNumberIsTooLarge ()
};

const clearDisplay = function () {
  mainDisplay.textContent = "0";
  minorDisplay.textContent = "0";
};
const deleteLastInput = function () {
  if (mainDisplay.textContent != 0) {
    mainDisplay.textContent = mainDisplay.textContent.substring(
      0,
      mainDisplay.textContent.length - 1
    );
  }
  if (mainDisplay.textContent == "") {
    mainDisplay.textContent = 0;
  }
};
const showInMinorDisplay = function (e) {
  if (minorDisplay.textContent == 0) {
    minorDisplay.textContent = "";
  }
  minorDisplay.textContent = `${mainDisplay.textContent} ${e.target.textContent}`;
  mainDisplay.textContent = 0;
};
const storeValue1 = function () {
  return Number(
    minorDisplay.textContent.substring(0, minorDisplay.textContent.length - 1)
  );

  checkIfNumberIsTooLarge ()
};
const storeValue2 = function () {
  return Number(mainDisplay.textContent);
};
const showResult = function () {
  let operator = detectOperator();
  let num1 = storeValue1();
  let num2 = storeValue2();
  mainDisplay.textContent = operate(operator, num1, num2);
  minorDisplay.textContent = mainDisplay.textContent;

  checkIfNumberIsTooLarge ()
};
const detectOperator = function () {
  let op = minorDisplay.textContent.substring(
    minorDisplay.textContent.length - 1
  );
  switch (op) {
    case "+":
      return add;
    case "-":
      return subtract;
    case "x":
      return multiply;
    case "÷":
      return divide;
  }
};

function checkIfNumberIsTooLarge () {
  if (mainDisplay.textContent.length >= 10) {
    mainDisplay.textContent = mainDisplay.textContent.substring(0, 9)
  } else if (minorDisplay.textContent.length >= 12) {
    minorDisplay.textContent = Math.round(minorDisplay.textContent).toFixed(12)
  }
}

//eventlisteners
oneBtn.addEventListener("mousedown", showInDisplay);
twoBtn.addEventListener("mousedown", showInDisplay);
threeBtn.addEventListener("mousedown", showInDisplay);
fourBtn.addEventListener("mousedown", showInDisplay);
fiveBtn.addEventListener("mousedown", showInDisplay);
sixBtn.addEventListener("mousedown", showInDisplay);
sevenBtn.addEventListener("mousedown", showInDisplay);
eightBtn.addEventListener("mousedown", showInDisplay);
nineBtn.addEventListener("mousedown", showInDisplay);
zeroBtn.addEventListener("mousedown", showInDisplay);
divideBtn.addEventListener("mousedown", showInMinorDisplay);
multiplyBtn.addEventListener("mousedown", showInMinorDisplay);
subtractBtn.addEventListener("mousedown", showInMinorDisplay);
addBtn.addEventListener("mousedown", showInMinorDisplay);
dotBtn.addEventListener("mousedown", showInDisplay);
equalsBtn.addEventListener("mousedown", showResult);
clearBtn.addEventListener("mousedown", clearDisplay);
deleteBtn.addEventListener("mousedown", deleteLastInput);
