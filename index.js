"use strict"

// const butt = document.querySelector('#butt');

// const func = (a) => alert ("123")


// butt.addEventListener('click', func)

// +++++++++++++++++++++++++++++++++++++++++++++++

let inp;
const p = document.querySelector('#guessResult');
let randomNumber;

const checkGuess = () => {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    inp = Number(document.querySelector('#guessField').value)
    if (inp < 1 || inp > 100) {
        return p.textContent = "u enter wrong num"
    } else if (inp === randomNumber) {
        return p.textContent = "congratulation!"
    } else {
        return p.textContent = "u are wrong!"
    }
}