const add = (firstNum,secondNum) => firstNum + secondNum;
const subtract = (firstNum,secondNum) => firstNum - secondNum;
const multiply = (firstNum,secondNum) => firstNum * secondNum;
const divide = (firstNum,secondNum) => (firstNum / secondNum);


const resultScreenNumber = document.querySelector("#input-number");
const numericalButtons  = document.querySelectorAll(".numerical-btn");
const deleteButton = document.querySelector("#delete-btn");
const clearButton = document.querySelector("#clear-btn");

numericalButtons.forEach((numericalButton) => numericalButton.addEventListener("click", (e) => {    
    // if result number is 0 make it disappear with the selected number...
    if(resultScreenNumber.innerText === "0"){
        resultScreenNumber.innerText = null;
    }
    resultScreenNumber.innerText += numericalButton.innerText;
}));

//delete the last digit on the number when clicked on the delete button.
deleteButton.addEventListener("click", () => {
    //if its the only number on the screen make it 0 when clicked on the delete button.
    if(resultScreenNumber.innerText.length === 1){
        resultScreenNumber.innerText = 0;
    }
    else{
    resultScreenNumber.innerText = resultScreenNumber.innerText.substring(0,resultScreenNumber.innerText.length - 1);    
    }
});

//clear button makes the number 0 as a reset.
clearButton.addEventListener("click", () => resultScreenNumber.innerText = 0);