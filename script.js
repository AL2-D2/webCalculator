const add = (firstNum,secondNum) => firstNum + secondNum;
const subtract = (firstNum,secondNum) => firstNum - secondNum;
const multiply = (firstNum,secondNum) => firstNum * secondNum;
const divide = (firstNum,secondNum) => firstNum / secondNum;
const decimal = (number) => Math.floor(number / 100);

const resultScreenNumber = document.querySelector("#input-number");
const numericalButtons  = document.querySelectorAll(".numerical-btn");
const deleteButton = document.querySelector("#delete-btn");
const clearButton = document.querySelector("#clear-btn");

const addButton = document.querySelector("#add-btn");
const resultButton = document.querySelector("#result-btn");
//these numbers are stored for to be used later in the result button. they will be the arguments of the mathematical operation methods.
let firstNumber = null;
let secondNumber = null;
let result = null;

numericalButtons.forEach((numericalButton) => numericalButton.addEventListener("click", () => {    
    // if result number has a 'reset' class make it disappear with the selected number...
    if(resultScreenNumber.classList.contains("reset")){
        resultScreenNumber.innerText = null;
        resultScreenNumber.classList.remove("reset");
    }
    
    resultScreenNumber.innerText += numericalButton.innerText;
    
}));

//delete the last digit on the number when clicked on the delete button.
deleteButton.addEventListener("click", () => {
    //if its the only number on the screen make it 0 when clicked on the delete button.
    if(resultScreenNumber.innerText.length === 1){
        resultScreenNumber.innerText = 0;
        resultScreenNumber.classList.add("reset");
    }
    else{
    resultScreenNumber.innerText = resultScreenNumber.innerText.substring(0,resultScreenNumber.innerText.length - 1);    
    }
});

//clear button makes the number 0 as a reset.
clearButton.addEventListener("click", () => {
    resultScreenNumber.innerText = 0
    resultScreenNumber.classList.add("reset");
});


addButton.addEventListener("click", () =>  {
    /* if first number is a valid number and does not have reset class (which indicates that currently the operator button is not pressed which
     prevents to assign current value to be second because it is already and must be the first value...) */
    if(firstNumber != null && !resultScreenNumber.classList.contains("reset")){
        //must be converted to a number because operation functions take two number element as arguments.
        secondNumber = Number(resultScreenNumber.innerText);

        result = add(firstNumber,secondNumber);
        resultScreenNumber.innerText = result;
        //assigning firstNumber as the current result because it should continue to operate if another operation is desired from the user.
        firstNumber = result;
        //second number should be reset for future operations from the user.
        secondNumber = null;
        resultScreenNumber.classList.add("reset");
    }
    else{
    /*stores the current element on the firstNumber and adds reset class because after the another 
    numerical button is pushed it is going reset the currentScreenValue to the intended number.*/
    firstNumber = Number(resultScreenNumber.innerText);
    resultScreenNumber.classList.add("reset");    
    }
});