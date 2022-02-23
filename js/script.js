'use strict'

const messageFelt= document.querySelector(".message");

console.log(messageFelt);


const numberFelt = document.querySelector(".number");
const scorefelt = document.querySelector(".score");

const inputGuess = document.querySelector(".guess");
inputGuess.value = 11;

const pbCheck = document.querySelector(".check");

function checkNumber() {
  const guess = inputGuess.value;
  console.log("num =" + guess + " type=" + typeof gnum);

  const numGuess = Number(guess);
  console.log("num =" + numGuess + " type=" + typeof numGuess);


  // forskel mellem brug af == og ===
  console.log("compare str med num: " + (guess == numGuess));
  console.log("compare str med num: " + (guess === numGuess));
  console.log("2">17);
  console.log("2">"17");




  if (!numGuess) {
    messageFelt.textContent = "✨ Not a number";
  }else {
    if (numGuess > randomNumber) {
      messageFelt.textContent = "Oh too high! Guess again";
    } else if (numGuess <randomNumber) {
      messageFelt.textContent = "Uhh too low! Guess again";
    } else {
      messageFelt.textContent = "You were right! 😁"
      numberFelt.textContent = randomNumber;
      numberFelt.style.color = "green";
    }
  }
}

let randomNumber = 0;

function getRandomNumber() {
  randomNumber = Math.random();
  randomNumber = Math.round(randomNumber*20 + 1);
}

getRandomNumber();
pbCheck.addEventListener('click', checkNumber);


const again = document.querySelector(".again");

again.addEventListener('click', playAgain)


const felt = document.querySelector(".left");

function playAgain() {
  numberFelt.textContent = "?";
  numberFelt.style.color = "#222";
  getRandomNumber();
  pbCheck.addEventListener('click', checkNumber);
}
