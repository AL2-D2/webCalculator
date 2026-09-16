const add = (firstNum, secondNum) => firstNum + secondNum;
const subtract = (firstNum, secondNum) => firstNum - secondNum;
const multiply = (firstNum, secondNum) => firstNum * secondNum;
const divide = (firstNum, secondNum) => firstNum / secondNum;
const decimal = (number) => Math.floor(number / 100);

function round(num, decimalPlaces = 0) {
    var p = Math.pow(10, decimalPlaces);
    var n = (num * p) * (1 + Number.EPSILON);
    return Math.round(n) / p;
}

function operate(e, firstNumber, secondNumber) {
    //checking what operator is pressed and make calculations based on this check.
    if (e.target.classList.contains("add-btn")) {
        return add(firstNumber, secondNumber);
    }
    else if (e.target.classList.contains("subtract-btn")) {
        return subtract(firstNumber, secondNumber);
    }
    else if (e.target.classList.contains("multiply-btn")) {
        return multiply(firstNumber, secondNumber);
    }
    else {
        return divide(firstNumber, secondNumber);
    }
}

function eventOperator(e) {
    /* if first number is a valid number and does not have reset class (which indicates that currently any of the operator button is not pressed which
     prevents to assign current value to be second because it is already assigned and must be the first value...). So it does the operation
     whether result button pressed or not*/
    if (firstNumber != null && !resultScreenNumber.classList.contains("reset")) {
        //must be converted to a number because operation functions take two number element as arguments.
        secondNumber = Number(resultScreenNumber.innerText);
        //sending e because we can check what operator is in operate function.        
        result = operate(e, firstNumber, secondNumber);
        resultScreenNumber.innerText = round(result, 2);
        //assigning firstNumber as the current result because it should continue to operate if another operation is desired from the user.
        firstNumber = result;
        //second number should be reset for future operations from the user.
        secondNumber = null;
        resultScreenNumber.classList.add("reset");
    }
    else {
        /*if first number is not already assigned it is going to assign current value on the screen and adds reset class to write another 
        value later by user.*/
        firstNumber = Number(resultScreenNumber.innerText);
        resultScreenNumber.classList.add("reset");
    }
}

const resultScreenNumber = document.querySelector("#input-number");
const numericalButtons = document.querySelectorAll(".numerical-btn");
const deleteButton = document.querySelector("#delete-btn");
const clearButton = document.querySelector("#clear-btn");

const addButton = document.querySelector("#add-btn");
const subtractButton = document.querySelector("#subtract-btn");
const multiplyButton = document.querySelector("#multiply-btn");
const divideButton = document.querySelector("#divide-btn");
const resultButton = document.querySelector("#result-btn");

const percentageButton = document.querySelector("#percentage-btn");
const dotButton = document.querySelector("#dot-btn");
//these numbers are stored for to be used later in the result button. they will be the arguments of the mathematical operation methods.
let firstNumber = null;
let secondNumber = null;
let result = null;
//this is for the result button bc when clicked it must know which is the last operator and operate according to this information.
let lastOperator = null;

numericalButtons.forEach((numericalButton) => numericalButton.addEventListener("click", () => {
    // if result number has a 'reset' class make it disappear with the selected number...
    if (resultScreenNumber.classList.contains("reset")) {
        resultScreenNumber.innerText = null;
        resultScreenNumber.classList.remove("reset");
    }

    resultScreenNumber.innerText += numericalButton.innerText;
}));

//TODO: when pressed delete button it should make the stored value change so the calculation based on the last updated values.
//delete the last digit on the number when clicked on the delete button.
deleteButton.addEventListener("click", () => {
    //if its the only number on the screen make it 0 when clicked on the delete button.
    if (resultScreenNumber.innerText.length === 1) {
        resultScreenNumber.innerText = 0;
        resultScreenNumber.classList.add("reset");
    }
    else {
        resultScreenNumber.innerText = resultScreenNumber.innerText.substring(0, resultScreenNumber.innerText.length - 1);
    }
});

//clear button makes the number 0 as a reset.
clearButton.addEventListener("click", () => {
    resultScreenNumber.innerText = 0
    resultScreenNumber.classList.add("reset");
    //reset of values.
    firstNumber = null;
    secondNumber = null;
    result = null;
});

addButton.addEventListener("click", (e) => {
    eventOperator(e);
    lastOperator = e;
});
subtractButton.addEventListener("click", (e) => {
    eventOperator(e);
    lastOperator = e;
});
multiplyButton.addEventListener("click", (e) => {
    eventOperator(e);
    lastOperator = e;
});
divideButton.addEventListener("click", (e) => {
    eventOperator(e);
    lastOperator = e;
});
//we give lastOperator as an argument because resultButton must operate in according to last selected operator.
resultButton.addEventListener("click", () => eventOperator(lastOperator));


percentageButton.addEventListener("click", () => {
    firstNumber = resultScreenNumber.innerText;
    resultScreenNumber.innerText = round(firstNumber / 100, 6);
})

dotButton.addEventListener("click", () => {
    if(!resultScreenNumber.innerText.includes(".")){
    resultScreenNumber.innerText += ".";
    }
})