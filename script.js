const add = (firstNum,secondNum) => firstNum + secondNum;
const subtract = (firstNum,secondNum) => firstNum - secondNum;
const multiply = (firstNum,secondNum) => firstNum * secondNum;
const divide = (firstNum,secondNum) => (firstNum / secondNum);


const resultScreenNumber = document.querySelector("#input-number");
const numericalButtons  = document.querySelectorAll(".numerical-btn");


numericalButtons.forEach((numericalButton) => numericalButton.addEventListener("click", (e) => {    
    // if result number is 0 make it disappear with the selected number...
    if(resultScreenNumber.innerText === "0"){
        resultScreenNumber.innerText = null;
    }
    resultScreenNumber.innerText += numericalButton.innerText;
}));