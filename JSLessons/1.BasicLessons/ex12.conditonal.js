var secretNumber = 34;
var guessNumber = prompt("Guess My number");
var guess = Number(guessNumber);

if (guess == secretNumber) {
  alert("Correct");
} else if (guess < secretNumber) {
  alert("Too high.Try again!");
} else {
  alert("Too Low.Try again!");
}
