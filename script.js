'use strict';

// Handling click events
let secretNumber = Math.trunc(Math.random()*20) + 1;

let score = 20;
let highScore = 0;

// This function is just for printing the textContent of the .message DOM
const displayMessage = function(message){
  document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click',
function(){
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess); 

  // When there is no input
  if(!guess)
  {
    displayMessage("⛔ No number!");
  }
  // When player wins
  else if(guess === secretNumber)
  {
    displayMessage( "🎉 Correct Number");

    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = "#60b347";
    document.querySelector('.number').style.width = "30rem";

    // To calculate highscore
    if(score > highScore)
    {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
  // When the guess is not equals to secret number.
  else if(guess !== secretNumber)
  {
    if(score > 1)
    {
      displayMessage(guess > secretNumber ? "Too High!" : "Too low!");
      score--;
      document.querySelector('.score').textContent = score;
    }
    else
    {
      displayMessage("You lost the game!");
      document.querySelector('.score').textContent = 0;
    }
  }
});

// When you will click the again button

document.querySelector('.again').addEventListener('click',
function(){

  score = 20;

  secretNumber = Math.trunc(Math.random()*20) + 1;

  document.querySelector('.message').textContent = "Start guessing...";
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = "?";
  document.querySelector('.guess').textContent = "";

  document.querySelector('body').style.backgroundColor = "#222";
  document.querySelector('.number').style.width = "15rem";
})