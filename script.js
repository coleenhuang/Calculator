let state = { 
    firstNum : null,
    secondNum: null,
    operator: null,
    evaluated: false
}
let inputDisplay = 0

const calculatorButtons= document.querySelector('.button-container')
const equationDisplay = document.querySelector('.top-row')
const solutionDisplay = document.querySelector('.bottom-row')

function getNumber() {
    calculatorButtons.addEventListener('click', (event) => {
        let buttonType = event.target.dataset.type
         
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

function displayEquation(solutionNum) {
    equationDisplay.innerHTML = solutionNum
}

function displaySolution() {
    solutionDisplay.innerHTML = inputDisplay
}

getNumber()