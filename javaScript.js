//basic operations
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
function getPercentage(a , b){
    return (a * b)/100
}

//variables to store the operands and the operator
let firstNumber;
let operator;
let secondNumber;


//function that changes the display
const display = document.querySelector(".display");
function changeDisplay (symbol){
    if((display.textContent).length > 7){
        return;
    }
    else if (!(symbol === "." && (display.textContent).includes("."))){
            display.textContent += symbol;
        }
        else{
            return;
        }
    }


//functions that store the first number, chooses an operator and clear the display 
let added = document.querySelector(".add")
added.addEventListener("click", function addOperation() {
    firstNumber = +display.textContent;
    operator = "+"
    display.textContent = "";
})

let subtract = document.querySelector(".subtract")
subtract.addEventListener("click", function subtractOperation() {
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

let percentage = document.querySelector(".percentage")
percentage.addEventListener("click", () => {
    firstNumber = +display.textContent;
    operator = "%"
    display.textContent = "";
})

let result;
let equalButton = document.querySelector(".equalButton")

//store the second number and make the operations, as well as change the display and show the result
equalButton.addEventListener("click", function equalBtn() {

    if(secondNumber === NaN || firstNumber === NaN){
        return;
    }

    secondNumber = +display.textContent;
    
    switch(operator){
        case "+":
        result = addNumbers(firstNumber, secondNumber).toFixed(6)
        result = Number.parseFloat(result)
        firstNumber = result;
        display.textContent = result;
        break;

        case "-":
        result = subtractNumbers(firstNumber, secondNumber).toFixed(6)
        result = Number.parseFloat(result)
        firstNumber = result;
        display.textContent = result;
        break;

        case "*":
        result = multiplyNumbers(firstNumber, secondNumber).toFixed(6)
        result = Number.parseFloat(result)
        firstNumber = result;
        display.textContent = result;
        break;
        
        case "/":
        result = divideNumbers(firstNumber, secondNumber).toFixed(6)
        result = Number.parseFloat(result)
        if(result === 4/0){
                    display.textContent = "Error, can't divide for zero"
                    break;
                }
        else{
                firstNumber = result;
                display.textContent = result;
                break;
        }

        case "%":
        result = getPercentage(firstNumber, secondNumber).toFixed(6)
        result = Number.parseFloat(result)
        firstNumber = result;
        display.textContent = result;
        break;
    }
})




//clear btn
let clear = document.querySelector(".clear")
clear.addEventListener("click", () => {
    display.textContent = "";
    firstNumber = "";
    secondNumber = "";
    result = "";
})

//change sing
let sign = document.querySelector(".sign")
sign.addEventListener("click", () => {
    display.textContent = +(display.textContent)*-1
})

//backspace
let backspaceBtn = document.querySelector(".backspace")
backspaceBtn.addEventListener("click", () => {
    let lengthOfDisplay = (display.textContent).length
    console.log(lengthOfDisplay)
    display.textContent = (display.textContent).slice(0, lengthOfDisplay - 1)
})


document.addEventListener("keydown", () => {
    switch(event.key){
        case "1":
        changeDisplay("1");
        break;
        case "2":
            changeDisplay("2");
            break;
            case "3":
                changeDisplay("3");
                break;
                case "4":
                    changeDisplay("4");
                    break;
                    case "5":
                        changeDisplay("5");
                        break;        
                        case "6":
                        changeDisplay("6");
                        break;
                        case "7":
                            changeDisplay("7");
                            break;
                            case "8":
                                changeDisplay("8");
                                break;
                                case "9":
                                    changeDisplay("9");
                                    break;
                                    case "0":
                                    changeDisplay("0");
                                    break;
                                    case ".":
                                    changeDisplay(".");
                                    break;
                                        case "+":
                                        firstNumber = +display.textContent;
                                        operator = "+"
                                        display.textContent = "";
                                        break;
                                        case "-":
                                            firstNumber = +display.textContent;
                                            operator = "-"
                                            display.textContent = "";
                                        break;
                                        case "*":
                                            firstNumber = +display.textContent;
                                            operator = "*"
                                            display.textContent = "";
                                        break;
                                        case "/":
                                            firstNumber = +display.textContent;
                                            operator = "/"
                                            display.textContent = "";
                                        break;
    }
})