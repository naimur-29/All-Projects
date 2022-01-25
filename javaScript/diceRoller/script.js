'use strict';

// defining the variables
let diceDraw;
let scoreSum = 0;

// defining the dice
const imgDice = document.querySelector('.dice');
const objDice = {
  1: 'dice-1.png',
  2: 'dice-2.png',
  3: 'dice-3.png',
  4: 'dice-4.png',
  5: 'dice-5.png',
  6: 'dice-6.png',
};

// defining player1
const player1 = document.querySelector('.player--0');
const player1Score = player1.querySelector('.score');
const player1CurrentScore = player1.querySelector('.current-score');

// defining player2
const player2 = document.querySelector('.player--1');
const player2Score = player2.querySelector('.score');
const player2CurrentScore = player2.querySelector('.current-score');

// defining buttons
const btnNewGame = document.querySelector('.btn--new');
const btnRollDice = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// defining the functions
const makeMeBrandNew = function () {
  // reset all values
  player1Score.textContent = 0;
  player2Score.textContent = 0;
  player1CurrentScore.textContent = 0;
  player2CurrentScore.textContent = 0;
  scoreSum = 0;

  // dice clear
  imgDice.style.display = 'none';

  // setting current player
  if (player2.classList.contains('player--active')) {
    player1.classList.add('player--active');
    player2.classList.remove('player--active');
  }

  // reset clearScreen
  player1.querySelector('.current').style.display = 'block';
  player2.querySelector('.current').style.display = 'block';
  btnRollDice.style.display = 'block';
  btnHold.style.display = 'block';
  btnNewGame.style.top = '4rem';
  player1.style.display = 'flex';
  player2.style.display = 'flex';
};

const clearScreen = function () {
  player1.querySelector('.current').style.display = 'none';
  player2.querySelector('.current').style.display = 'none';
  btnRollDice.style.display = 'none';
  btnHold.style.display = 'none';
  btnNewGame.style.top = '39.3rem';
};

const checkWinner = function () {
  if (Number(player1Score.textContent) >= 30) {
    player1Score.textContent = 'WINNER!';
    player2.style.display = 'none';

    clearScreen();
  } else if (Number(player2Score.textContent) >= 30) {
    player1.style.display = 'none';
    player2Score.textContent = 'WINNER!';

    clearScreen();
  }
};

const scoreReloader = function () {
  if (player1.classList.contains('player--active')) {
    player1CurrentScore.textContent = scoreSum;
  } else {
    player2CurrentScore.textContent = scoreSum;
  }
};

const rollDice = function () {
  // dice draw
  diceDraw = Math.floor(Math.random() * 6) + 1;

  // dice change
  imgDice.style.display = 'block';
  imgDice.src = objDice[diceDraw];

  // score and plyer switcher
  if (diceDraw !== 1) {
    scoreSum += diceDraw;
    scoreReloader();
  } else {
    scoreSum = 0;
    scoreReloader();

    if (player1.classList.contains('player--active')) {
      player1.classList.remove('player--active');
      player2.classList.add('player--active');
    } else {
      player1.classList.add('player--active');
      player2.classList.remove('player--active');
    }
  }
};

const holdScore = function () {
  // dice reload
  imgDice.style.display = 'none';

  // score storing
  player1.classList.contains('player--active')
    ? (player1Score.textContent = Number(player1Score.textContent) + scoreSum)
    : (player2Score.textContent = Number(player2Score.textContent) + scoreSum);

  // score and player switcher
  scoreSum = 0;
  scoreReloader();
  if (player1.classList.contains('player--active')) {
    player1.classList.remove('player--active');
    player2.classList.add('player--active');
  } else {
    player1.classList.add('player--active');
    player2.classList.remove('player--active');
  }

  // check winner
  checkWinner();
};

// setting the playground
imgDice.style.display = 'none';
player1Score.textContent = 0;
player2Score.textContent = 0;

// implementing the logic
// roll dice
btnRollDice.addEventListener('click', rollDice);

// hold
btnHold.addEventListener('click', holdScore);

// new game
btnNewGame.addEventListener('click', makeMeBrandNew);
