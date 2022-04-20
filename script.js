let equation;
let solution = 0;
const calculatorButtons= document.querySelector('.button-container')
const equationDisplay = document.querySelector('.top-row')
const solutionDisplay = document.querySelector('.bottom-row')

function getNumber() {
    calculatorButtons.addEventListener('click', (event) => {
        
        console.log(event.target.value)
        
        if (equation === undefined) {
            equation = event.target.value.toString();  
        }
        solution == 0 ? solution = event.target.value.toString() : solution +=event.target.value.toString()
        displayEquation()
        displaySolution()
    })
}

function displayEquation() {
    equationDisplay.innerHTML = equation
}

function displaySolution() {
    solutionDisplay.innerHTML = solution
}

getNumber()