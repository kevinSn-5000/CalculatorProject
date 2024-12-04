function addNumbers(a , b){
    return a + b;
}
function subtractNumbers(a , b){
    return a - b;
}
function multiplyNumbers(a , b){
    return a * b;
}
function divideNumbers(a , b){
    return a / b;
}

let firstNumber;
let operator;
let secondNumber;



const display = document.querySelector(".display");
function changeDisplay (symbol){
    display.textContent += symbol;
    console.log(display.textContent);

}


let added = document.querySelector(".add")
added.addEventListener("click", () => {
    firstNumber = +display.textContent;
    operator = "+"
    display.textContent = "";
})

let subtract = document.querySelector(".subtract")
subtract.addEventListener("click", () => {
    firstNumber = +display.textContent;
    operator = "-"
    display.textContent = "";
})

let multiply = document.querySelector(".multiply")
multiply.addEventListener("click", () => {
    firstNumber = +display.textContent;
    operator = "*"
    display.textContent = "";
})

let divide = document.querySelector(".divide")
divide.addEventListener("click", () => {
    firstNumber = +display.textContent;
    operator = "/"
    display.textContent = "";
})

let result;
let equalButton = document.querySelector(".equalButton")

equalButton.addEventListener("click", () => {

    secondNumber = +display.textContent;
    
    switch(operator){
        case "+":
        result = addNumbers(firstNumber, secondNumber)
        firstNumber = result;
        display.textContent = result;
        break;

        case "-":
        result = subtractNumbers(firstNumber, secondNumber)
        firstNumber = result;
        display.textContent = result;
        break;

        case "*":
        result = multiplyNumbers(firstNumber, secondNumber)
        firstNumber = result;
        display.textContent = result;
        break;
        
        case "/":
        result = divideNumbers(firstNumber, secondNumber)
        firstNumber = result;
        display.textContent = result;
        break;
    }
})