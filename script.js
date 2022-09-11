'use strict';
let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
document.querySelector('.check').addEventListener('click', function () {
  const guessValue = Number(document.querySelector('.guess').value);
  // when there is no input
  if (!guessValue) {
    displayMessage('⛔ No number!');
    // when player wins
  } else if (guessValue === secretNumber) {
    displayMessage('🎉 Correct number!');
    document.body.style.backgroundColor = '#60b367';
    document.querySelector('.number').textContent = secretNumber;
    highScore += 10;
    document.querySelector('.highscore').textContent = highScore;
  } else if (guessValue !== secretNumber) {
    // when score is avaliable
    if (score > 0) {
      displayMessage(
        guessValue > secretNumber ? '📈 Too high!' : '📉 Too low!'
      );
      score--;
      document.querySelector('.score').textContent = score;
    }
  } else {
    // when score is 0
    displayMessage('😔 You lost the game!');
    document.querySelector('.score').textContent = 0;
    document.body.style.backgroundColor = 'red';
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  score = 20;
  document.body.style.backgroundColor = '#222';
  displayMessage('Start guessing...');
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
});
