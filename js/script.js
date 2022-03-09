'use strict'

const messageFelt = document.querySelector(".message");
const numberFelt = document.querySelector(".number");
const scorefelt = document.querySelector(".score");
const inputGuess = document.querySelector(".guess");
const pbCheck = document.querySelector(".check");
const again = document.querySelector(".again");
const displayHighscore = document.querySelector(".highscore");

// Opsætning
console.log(messageFelt);
inputGuess.value = 11;
let randomNumber = 0;
let score = 20;
let highscore = 0;

// Spil running
function checkNumber() {
  const guess = inputGuess.value;
  const numGuess = Number(guess);
  console.log("num =" + guess + " type=" + typeof gnum);

  if (!numGuess) {
    messageFelt.textContent = "✨ Not a number";
  } else {
    if (numGuess > randomNumber) {
      messageFelt.textContent = "Oh too high! Guess again";
      score--;
    } else if (numGuess < randomNumber) {
      messageFelt.textContent = "Uhh too low! Guess again";
      score--;
    } else {
      messageFelt.textContent = "You were right! 😁"
      numberFelt.textContent = randomNumber;
      numberFelt.style.color = "green";
      scorefelt.textContent = score;
      if (score > highscore) {
        highscore = score;
      }
      displayHighscore.textContent = highscore;
    }
  }

  // Kun for øvelse kan slette alt andet end ovenover i funktionen
  console.log("num =" + numGuess + " type=" + typeof numGuess);
  // forskel mellem brug af == og ===
  console.log("compare str med num: " + (guess == numGuess));
  console.log("compare str med num: " + (guess === numGuess));
  console.log("2" > 17);
  console.log("2" > "17");
}

function getRandomNumber() {
  randomNumber = Math.random();
  randomNumber = Math.round(randomNumber * 20 + 1);
}

function playAgain() {
  playAgainReset();
  pbCheck.addEventListener('click', checkNumber);
}

function playAgainReset() {
  numberFelt.textContent = "?";
  numberFelt.style.color = "#222";
  scorefelt.textContent = "20";

  score = 20;
  getRandomNumber();
}

getRandomNumber();
pbCheck.addEventListener('click', checkNumber);
again.addEventListener('click', playAgain);
