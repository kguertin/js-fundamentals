// Game Values

let min = 1,
  max = 10,
  winningNum = getRandomNum(min, max),
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

// Play again event listener
game.addEventListener('mousedown', (e) => {
  if (e.target.className === 'play-again') {
    window.location.reload();
    guessInput.value = ''
  }
})

// Listen for guess
guessBtn.addEventListener('click', () => {
  let guess = parseInt(guessInput.value);

  // Validate Input
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter a number between ${min} and ${max}`, 'red');
  } else {
    // Check if Won
    if (guess === winningNum) {
      gameOver(true, `${winningNum} is correct! You win!`)
    } else {
      guessesLeft -= 1;

      if (guessesLeft === 0) {
        gameOver(false, `Game Over. You lost. The correct number was ${winningNum}`)
      } else {
        guessInput.style.borderColor = 'red';
        setMessage(`${guess} is not correct. ${guessesLeft} guesses left.`, 'red');
        guessInput.value = '';
      }
    }
  }
})

function gameOver(won, msg) {
  let color;
  won === true ? color = 'green' : color = 'red';
  guessInput.disabled = true;
  guessInput.style.borderColor = color;
  setMessage(msg, color);

  guessBtn.value = 'Play Again';
  guessBtn.className += 'play-again';
}

function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}
