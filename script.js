let firstNum = 0
let secondNum= null
let operator= null
let evaluated= false
let solution = null


const calculatorButtons= document.querySelector('.button-container')
const equationDisplay = document.querySelector('.top-row')
const inputDisplay = document.querySelector('.bottom-row')

function getNumber() {
    calculatorButtons.addEventListener('click', (event) => {
        let buttonType = event.target.dataset.type
        let valueEntered = event.target.value.toString()
         switch(buttonType) {
            case 'number':
                if (!operator){
                    //Adds digits to first number if operator has not been pressed
                   firstNum = appendNumber(firstNum, valueEntered)  
                }
                else {
                    //Adds digits to second number after operator has been pressed
                    secondNum = appendNumber(secondNum, valueEntered)  
                }
                updateInputScreen()
                break;
            case 'operator':
                if (firstNum && !secondNum) {
                    operator = valueEntered
                    updateInputScreen()
                }
                if (operator && secondNum) {
                    //TODO: fix the bug the operates the second operator instead of the first
                    firstNum = operate(operator, firstNum, secondNum);
                    console.log(firstNum)
                    operator = valueEntered
                    secondNum = null
                    updateInputScreen()
                }
                
                break;
            case 'evaluate':
                if(firstNum && secondNum && operator) {
                    evaluated = true
                    solution = operate(operator, firstNum, secondNum)
                    updateInputScreen()
                }
                break;

            //TODO: case backspace
            case 'reset':
                firstNum = 0
                secondNum= null
                operator= null
                evaluated= false
                solution = null
                updateInputScreen()
                resetEquation()
                break;
         }  
        
    })
}

function appendNumber(number, newDigit) {
    return number == 0 || !number ? number = newDigit : number += newDigit
}

function operate(sign, a, b) {
    switch(sign) {
        case '+':
            return add(a,b)
        case '-':
            return subtract(a, b)
        case '×':
            return multiply(a, b)
        case "÷":
            return divide(a,b)
    }
}

function add(a, b) {
    return a + b
}

function subtract(a, b) {
    return a - b 
}

function multiply(a, b) {
    return a * b
}

function divide(a, b) {
    return a / b
}



function updateInputScreen() {
    if(evaluated) {
        inputDisplay.innerHTML = solution
    }
    else if (!secondNum && !operator) {
        inputDisplay.innerHTML = firstNum
    }
    else if (operator) {
        displayEquation()
        secondNum?inputDisplay.innerHTML = secondNum:inputDisplay.innerHTML = firstNum
    }
    
    
}
function displayEquation() {
    equationDisplay.innerHTML = `${firstNum}${operator}${secondNum?secondNum:''}`
}

function resetEquation() {
    equationDisplay.innerHTML = ''
}

getNumber()