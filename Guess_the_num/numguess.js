
const againButton = document.querySelector(".again");
const checkButton = document.querySelector(".check");
const numberInput = document.querySelector(".number");
const guess = document.querySelector(".guess");
const message = document.querySelector(".message");
const score = document.querySelector(".score");
const highScore = document.querySelector(".highscore");
//step 2
//2.generate a random number and score
let randomNumber = Math.trunc(Math.random() * 20) + 1;
let scores = 20;
console.log(randomNumber);
//step 3
//3. check the button functionality
const checkFunc = () => {
  const guessValue = Number(guess.value);
  console.log(guessValue);
  if (!guessValue || guessValue < 1 || guessValue > 20) {
    message.textContent = "Please enter a valid number between 1 and 20";
    return;
  } else if (guessValue === randomNumber) {
    message.textContent = "Congratulations! You guessed the number!";
    document.querySelector("body").style.backgroundColor = "#114329";
    highScore.textContent = scores;
    numberInput.textContent = randomNumber;
  } else if (guessValue < randomNumber) {
    message.textContent = "Too low.";
    scores--;
    score.textContent = scores;
  } else if (guessValue > randomNumber) {
    message.textContent = "Too high.";
    scores--;
    score.textContent = scores;
  }
};

checkButton.addEventListener("click", checkFunc);
againButton.addEventListener("click", () => {
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  scores = 20;
  score.textContent = scores;
  message.textContent = "Start guessing...";
  guess.value = "";
  numberInput.textContent = "?";
  document.querySelector("body").style.backgroundColor = "black";
});