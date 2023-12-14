let randomNumber = Math.floor(Math.random() * 11);
let count = 1;
let guessContainer = document.querySelector(".guess-container")
let resultContainer = document.querySelector(".result-container")

const btnTry = document.querySelector('.guess-container button')
btnTry.addEventListener('click', handleTryClick)

const btnPlayAgain = document.querySelector('.result-container button')
btnPlayAgain.addEventListener('click', handlePlayAgain)

function handleTryClick (event) {
    event.preventDefault()
    const inputNumber = document.querySelector('input#number-guess')

    if(Number(inputNumber.value) === randomNumber) {
        let resultContainerText = document.querySelector(".result-container h2")
        let innerResultText = `You got it right in ${count} tries`

        guessContainer.classList.toggle('hide')
        resultContainerText.innerText = innerResultText;
        resultContainer.classList.toggle('hide')
    } 

    inputNumber.value = ""
    count++
}

function handlePlayAgain () {
    randomNumber = Math.floor(Math.random() * 11);
    count = 1;
    guessContainer.classList.toggle('hide')
    resultContainer.classList.toggle('hide')
}