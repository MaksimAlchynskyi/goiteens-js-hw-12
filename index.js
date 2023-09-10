"use strict"
// Напиши скрипт який при кліку на кнопку буде виводити 
// на екран повідомлення “Hello World!”.
//  Використовуй колбек в вигляді стрілки
const button = document.querySelector("#butt");

const h1 = document.querySelector("h1");

button.addEventListener("", ()=> {h1.textContent = "Hello world!"})

// Створи програму, яка генерує випадкове число від 1 до 100.
//  Користувач повинен вгадати число, введенням його в текстове поле. При кліку на кнопку
//  "Перевірити" програма повинна повідомити користувача,
//   чи є їх відповідь правильною.

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

// Створи програму, яка відображає повідомлення
//  про те, скільки разів користувач клікнув на сторінці.


const body = document.querySelector("body");
let k = 0
function func() {
    return k += 1;
}
body.addEventListener("click", ()=> {
    func()
    console.log(k);
})

// Напиши функцію, яка приймає масив чисел
//  і колбек-функцію. Функція повинна застосовувати
//   колбек-функцію до кожного елементу масиву та повертати новий
//  масив, що містить результати застосування колбек-функції до кожного елементу.

const applyCallbackToEachElement = (arr) => {
    arr.forEach(function callback(number) {
            console.log(number ** 5);
    });
}

const arr = [1, 2, 3, 4, 5]
const result = applyCallbackToEachElement(arr);

// Створіть функцію, яка розраховує дисконтну ціну на товар з урахуванням знижки. Функція повинна приймати вартість товару та відсоток знижки як аргументи. Використайте стрілкову функцію та колбек.

const conculateDiscountedPrice = (price, discount)=> {
    console.log(price / discount);
}
conculateDiscountedPrice(100, 10);