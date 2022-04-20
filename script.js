let equation;
const calculatorButtons= document.querySelector('.button-container')
const equationDisplay = document.querySelector('.top-row')
const solutionDisplay = document.querySelector('.bottom-row')

function getNumber() {
    calculatorButtons.addEventListener('click', (event) => {
        
        console.log(event.target.value)
        equation = event.target.value.toString();
        displayEquation()
    })
}

function displayEquation() {
    equationDisplay.innerHTML = equation
}

getNumber()