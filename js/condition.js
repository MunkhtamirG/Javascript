
let correctGuess = false;
const number = 6;
const guess = prompt("Guess a number between 1 and 10.");

if (+guess === number) {
  correctGuess = true;
} else if (+guess < number) {
  const guessMore = prompt(`Try again. The number is higher than ${guess}`);
  if (+guessMore === number) {
    correctGuess = true;
  }
} else if (+guess > number) {
  const guessLess = prompt(`Try again. The number is lower than ${guess}`);
  if (+guessLess === number) {
    correctGuess = true;
  }
}

if (correctGuess) {
  alert("You guessed the number!");
} else {
  alert(`Sorry. The number was ${number}.`);
}
