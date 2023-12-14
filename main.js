let randomNumber = Math.floor(Math.random() * 11);
let count = 1;

function handleClick (event) {
    event.preventDefault()
    
    const inputNumber = document.querySelector('input#number-guess')
    if(Number(inputNumber.value) !== randomNumber) {
        count++
        alert('Errou. Tente novamente.')
    } else {
        let guessContainer = document.querySelector(".guess-container")
        let resultContainer = document.querySelector(".result-container")
        let resultContainerText = document.querySelector(".result-container h2")
        let innerResultText = `You got it right in ${count} tries`


        guessContainer.classList.toggle('hide')
        resultContainerText.innerText = innerResultText;
        resultContainer.classList.toggle('hide')
    }
}