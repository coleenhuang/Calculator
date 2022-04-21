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
             case 'evaluate':
                console.log(secondNum && operator)
                 if(firstNum && secondNum && operator) {
                     evaluated = true
                     solution = operate(operator, firstNum, secondNum)
                     updateInputScreen()
                 }
                 break  
            case 'number':
                if (!operator){
                   firstNum = appendNumber(firstNum, valueEntered)  
                }
                else {
                    secondNum = appendNumber(secondNum, valueEntered)  
                }
                updateInputScreen()
                break;
            case 'operator':
                if (firstNum) {
                    operator = valueEntered
                    updateInputScreen()
                }
                break;
         }
        //sort the buttons by type number, operator or eval
        /*if (!state.firstNum) {
            state.firstNum = event.target.value.toString()
            displayEquation(state.firstNum)
        }
        else {
            if (!state.operator) {
                state.firstNum == 0 ? state.firstNum = event.target.value.toString() : state.firstNum +=event.target.value.toString()
                displayEquation(state.firstNum)
            }
        }*/
        
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

getNumber()