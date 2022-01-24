'use strict';

// variables
let userInput;
let user = document.querySelector('.guess');
user.value = '';

let message = document.querySelector('.message');

let scoreCounter = document.querySelector('.score');
scoreCounter.textContent = 20;
let highScore = document.querySelector('.highScore');
highScore.textContent = 0;

let hiddenPosition = document.querySelector('.number');
let hiddenNum = Math.floor(Math.random() * 20 + 1);

// check function
document.querySelector('.check').addEventListener('click', function () {
  // score increment system
  if (scoreCounter.textContent > 1) {
    userInput = Number(user.value);
    scoreCounter.textContent -= 1;
    if (
      userInput === 0 ||
      userInput > 20 ||
      userInput < 0 ||
      userInput === hiddenNum
    )
      scoreCounter.textContent = Number(scoreCounter.textContent) + 1;

    // when the input is higher
    if (userInput > hiddenNum) {
      // if the input is invalid
      if (userInput > 20) {
        message.textContent = `The number must be between (1 and 20)`;
      } else {
        message.textContent = `Too high...`;
      }

      // when the input is lower
    } else if (userInput < hiddenNum) {
      // if the input is invalid
      if (userInput <= 0) {
        message.textContent = `The number must be between (1 and 20)`;
      } else {
        message.textContent = `Too low...`;
      }

      // when the player wins
    } else {
      message.textContent = `You guessed the correct number!!`;

      document.querySelector('body').style.backgroundColor = '#60b347';
      hiddenPosition.style.width = '30rem';

      hiddenPosition.textContent = hiddenNum;

      if (Number(highScore.textContent) < Number(scoreCounter.textContent))
        highScore.textContent = scoreCounter.textContent;
    }

    // when the game's over
  } else {
    message.textContent = `You lose!`;

    hiddenPosition.textContent = 'GAME OVER';
    hiddenPosition.style.width = '60rem';

    scoreCounter.textContent = 0;
  }
});

// again function
document.querySelector('.again').addEventListener('click', function () {
  if (userInput === hiddenNum || scoreCounter.textContent === '0') {
    hiddenPosition.textContent = '?';
    message.textContent = `Start guessing..,`;
    document.querySelector('.guess').value = '';

    document.querySelector('body').style.backgroundColor = '#222';
    hiddenPosition.style.width = '15rem';

    scoreCounter.textContent = 20;
    hiddenNum = Math.floor(Math.random() * 20 + 1);
  }
});
