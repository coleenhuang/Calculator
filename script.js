let equation;
const calculatorButtons= document.querySelector('.button-container')



function getNumber() {
    calculatorButtons.addEventListener('click', (event) => {
        console.log('clicked')
        console.log(event.target.value)
    })
}

getNumber()