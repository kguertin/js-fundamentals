// Game Values

let min = 1,
  max = 10,
  winningNum = 2,
  guessesLeft = 3;

// UI Elements

const game = document.querySelector('#game'),
  minNum = document.querySelector('.min-num'),
  maxNum = document.querySelector('.max-num'),
  guessBtn = document.querySelector('#guess-btn'),
  guessInput = document.querySelector('#guess-input'),
  message = document.querySelector('.message');

// Assign UI Min and Max

minNum.textContent = min;
maxNum.textContent = max;

// Listen for guess
guessBtn.addEventListener('click', () => {
  let guess = parseInt(guessInput.value);

  // Validate Input
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter a number between ${min} and ${max}`, 'red')
  }

  // Check if Won
  if (guess === winningNum) {
    guessInput.disabled = true;
    guessInput.style.borderColor = 'green';
    setMessage(`${winningNum} is correct! You win!`, 'green')

  } else {

  }

})

function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}
