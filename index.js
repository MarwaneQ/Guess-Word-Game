let gameName = "Guess The Word";
document.title= gameName;
document.querySelector("h1").innerHTML = gameName;
document.querySelector("footer").innerHTML = `${gameName} Created By Marwane Dev`;
let numberOfTries = 6;
let numberOfLetters = 6;
let currentTry = 1;
function generateInput() {
    const inputsContainer = document.querySelector(".inputs")

    for (let i = 1; i <= numberOfTries; i++) {
        const tryDiv = document.createElement("div");
        tryDiv.classList.add(`try-${i}`);
        tryDiv.innerHTML =`<span>Try ${i}</span>`;

        if(i !==1) tryDiv.classList.add('disabled-input')

        for (let j = 1; j <= numberOfLetters ; j++){
            const input = document.createElement("input")
            input.type = "text"
            input.id = `guess-${i}-letter-${j}`
            input.setAttribute("maxlength","1")
            tryDiv.appendChild(input)
        }
        inputsContainer.appendChild(tryDiv)
    }
    inputsContainer.children[0].children[1].focus();

    const inpustDisabeled = document.querySelectorAll(".disabled-inputs input")
    inpustDisabeled.forEach((input)=>(input.disabled = true))

    const inputs = document.querySelectorAll('input')
    inputs.forEach((input, index) => {
        input.addEventListener('input', function () {
            this.value = this.value.toUpperCase()

            const nextInput = inputs[index + 1];
            if (nextInput) nextInput.focus();
        })
    })
}
window.onload =function(){
    generateInput()
}