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
let firstNumber = 0;
let secondNumber = 0;

numericalButtons.forEach((numericalButton) => numericalButton.addEventListener("click", (e) => {    
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

//stores the current element on the firstNumber and adds reset class because after the another button is pushed it is going to be reset
addButton.addEventListener("click", () =>  {
    firstNumber = resultScreenNumber.innerText;
    resultScreenNumber.classList.add("reset");
});

