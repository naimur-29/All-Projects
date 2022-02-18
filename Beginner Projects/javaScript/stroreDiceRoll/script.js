"use strict";

const mainDice = document.querySelector(".mainDice");
mainDice.style.display = "none";
const mainDisplay = document.querySelector(".container");
// let random
let diceDrawRunning;
let activator = 0;
let ranDice;
let displayNum = 0;

mainDisplay.addEventListener("click", function () {
  activator === 0 ? (activator = 1) : (activator = 0);

  displayNum += 0.5;

  if (activator === 1) {
    mainDice.style.display = "block";
    diceDrawRunning = setInterval(function () {
      ranDice = Math.trunc(Math.random() * 6) + 1;
      mainDice.src = `dice-${ranDice}.png`;
    }, 100);
  } else {
    clearInterval(diceDrawRunning);
    mainDice.style.display = "none";

    document.querySelector(
      `.displayDice${displayNum}`
    ).src = `dice-${ranDice}.png`;
  }

  if (displayNum === 6.5) {
    displayNum = 0.5;
    for (let i = 1; i < 7; i++)
      document.querySelector(`.displayDice${i}`).src = `dice-0.png`;
  }
});
