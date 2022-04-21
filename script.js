let firstNum = 0
let secondNum= null
let operator= null
let evaluated= false


const calculatorButtons= document.querySelector('.button-container')
const equationDisplay = document.querySelector('.top-row')
const inputDisplay = document.querySelector('.bottom-row')

function getNumber() {
    calculatorButtons.addEventListener('click', (event) => {
        let buttonType = event.target.dataset.type
        let valueEntered = event.target.value.toString()
         switch(buttonType) {
             /*TODO: case 'evaluate':
                 if(evaluated || !secondNum || operator ) {
                     displaySolution()
                 }
                 else {
                     Do the calculation
                 }
             */  
            case 'number':
            
                if (!operator){
                   firstNum = appendNumber(firstNum, valueEntered)
                   
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
    console.log(number == 0 )
    return number == 0 ? number = newDigit : number += newDigit
}

function evaluate() {
    
}



function updateInputScreen() {
    if (!secondNum && !operator) {
        inputDisplay.innerHTML = firstNum
    }
    else if (operator) {
        displayEquation()
    }
    
}
function displayEquation() {
    equationDisplay.innerHTML = `${firstNum}${operator}${secondNum?secondNum:''}`
}

getNumber()