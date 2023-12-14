let randomNumber = Math.floor(Math.random() * 11);
let count = 1;
const guessContainer = document.querySelector(".guess-container")
const resultContainer = document.querySelector(".result-container")
const btnTry = guessContainer.querySelector('button')
const btnPlayAgain = resultContainer.querySelector('button')

btnTry.addEventListener('click', handleTryClick)
btnPlayAgain.addEventListener('click', handlePlayAgain)
document.addEventListener('keypress', function (e) {
    if(e.key == 'Enter' && guessContainer.classList.contains('hide')) {
        handlePlayAgain()
    }
})

function handleTryClick (event) {
    event.preventDefault()
    const inputNumber = document.querySelector('input#number-guess')

    if(Number(inputNumber.value) < 0 || Number(inputNumber.value) > 10 || inputNumber.value == '') {
        inputNumber.value = '';
        alert('Type a number between 0 to 10. Try again.')
        count--
    }

    if(Number(inputNumber.value) === randomNumber) { 
        resultContainer.querySelector("h2").innerText = `You got it right in ${count} tries`;
        toggleScreen()
    } 

    inputNumber.value = ""
    count++
}

function handlePlayAgain () {
    randomNumber = Math.floor(Math.random() * 11);
    count = 1;
    toggleScreen()
}

function toggleScreen () {
    guessContainer.classList.toggle('hide')
    resultContainer.classList.toggle('hide')
}