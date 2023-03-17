'use strict';

//declaring elements
const displayedScoreP1 = document.querySelector('#score--0');
const displayedScoreP2 = document.querySelector('#score--1');
const currentScoreP1 = document.querySelector('#current--0');
const currentScoreP2 = document.querySelector('#current--1');

const areaP1 = document.querySelector('.player--active');
const areaP2 = document.querySelector('.player--1');
const dice = document.querySelector('.dice');

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let activePlayer, score, currentScore, playing;

//initial web page

const resetGame = function () {
  displayedScoreP1.textContent = 0;
  displayedScoreP2.textContent = 0;
  dice.classList.add('hidden');

  activePlayer = 0;
  score = [0, 0];
  currentScore = 0;
  playing = true;
};
resetGame();

//Change active player functionality
const changePlayer = function () {
  //reset current score
  currentScore = 0;
  document.querySelector(`#current--${activePlayer}`).textContent =
    currentScore;
  activePlayer = activePlayer == 0 ? 1 : 0;
  areaP1.classList.toggle('player--active');
  areaP2.classList.toggle('player--active');
};

//Rolling dice functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
    //generating random dice roll
    const diceNumber = Math.trunc(Math.random() * 6) + 1;

    //display the dice
    dice.classList.remove('hidden');
    //change the image based on the random number
    dice.src = `dice-${diceNumber}.png`;

    //check if the roll=1
    if (diceNumber !== 1) {
      currentScore += diceNumber;
      document.querySelector(`#current--${activePlayer}`).textContent =
        currentScore;
    } else {
      changePlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    score[activePlayer] += currentScore;
    document.querySelector(`#score--${activePlayer}`).textContent =
      score[activePlayer];
    //win condition
    if (score[activePlayer] >= 30) {
      console.log(`Player ${activePlayer + 1} wins!`);
      document.querySelector('.player--active').classList.add('player--winner');
      document.querySelector(`#current--${activePlayer}`).textContent = 0;
      dice.classList.add('hidden');

      playing = false;
    } else {
      changePlayer();
    }
  }
});

btnNew.addEventListener('click', function () {
  document.querySelector('.player--winner').classList.remove('player--winner');
  areaP1.classList.remove('player--active');
  areaP2.classList.remove('player--active');
  areaP1.classList.add('player--active');

  resetGame();
});
