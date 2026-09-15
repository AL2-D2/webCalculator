const add = (firstNum, secondNum) => firstNum + secondNum;
const subtract = (firstNum, secondNum) => firstNum - secondNum;
const multiply = (firstNum, secondNum) => firstNum * secondNum;
const divide = (firstNum, secondNum) => firstNum / secondNum;
const decimal = (number) => Math.floor(number / 100);

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
    if (firstNumber != null && !resultScreenNumber.classList.contains("reset")) {
        //must be converted to a number because operation functions take two number element as arguments.
        secondNumber = Number(resultScreenNumber.innerText);
        //sending e because we can check what operator is in operate function.        
        result = operate(e, firstNumber, secondNumber);
        resultScreenNumber.innerText = result;
        //assigning firstNumber as the current result because it should continue to operate if another operation is desired from the user.
        firstNumber = result;
        //second number should be reset for future operations from the user.
        secondNumber = null;
        resultScreenNumber.classList.add("reset");
    }
    else {
        /*stores the current element on the firstNumber and adds reset class because after the another 
        numerical button is pushed it is going reset the currentScreenValue to the intended number.*/
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
//these numbers are stored for to be used later in the result button. they will be the arguments of the mathematical operation methods.
let firstNumber = null;
let secondNumber = null;
let result = null;

numericalButtons.forEach((numericalButton) => numericalButton.addEventListener("click", () => {
    // if result number has a 'reset' class make it disappear with the selected number...
    if (resultScreenNumber.classList.contains("reset")) {
        resultScreenNumber.innerText = null;
        resultScreenNumber.classList.remove("reset");
    }

    resultScreenNumber.innerText += numericalButton.innerText;

}));

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
});

addButton.addEventListener("click", (e) => eventOperator(e));
subtractButton.addEventListener("click", (e) => eventOperator(e));
multiplyButton.addEventListener("click", (e) => eventOperator(e));
divideButton.addEventListener("click", (e) => eventOperator(e));