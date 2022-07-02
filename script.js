let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0;

const CHOICES = ["rock", "paper", "scissors"];

function computerPlay() {
  const number = Math.floor(Math.random() * CHOICES.length);
  return CHOICES[number];
}

const buttons = document.querySelectorAll("button.choice");

buttons.forEach((button) => {
  button.addEventListener("click", (button) => {
    playerSelection = button.target.id;
    playRound();
  });
});

const newGame = document.querySelector(".reset button");
newGame.addEventListener("click", () => {
  playerScore = 0;
  computerScore = 0;

  for (const button of buttons) {
    console.log(button);
    button.disabled = false;
  }

  results.textContent = "---";

  playerScoreDisplay.textContent = "0";
  computerScoreDisplay.textContent = "0";
});

const results = document.querySelector("#results p");
const playerInfo = document.querySelector(".playerinfo");
const pcInfo = document.querySelector(".pcinfo");
const playerScoreDisplay = document.querySelector("p.pscore");
const computerScoreDisplay = document.querySelector("p.cscore");

function playRound() {
  computerSelection = computerPlay();
  playerInfo.textContent = `${
    playerSelection === "rock" ? "🗿" : playerSelection === "paper" ? "📃" : "✂"
  }`;
  pcInfo.textContent = `${
    computerSelection === "rock"
      ? "🗿"
      : computerSelection === "paper"
      ? "📃"
      : "✂"
  }`;

  if (playerSelection === computerSelection) {
    results.textContent = "⚔ It's a tie! ⚔";
    results.style.cssText = "color: #EEAE00;";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    ++playerScore;
    playerScoreDisplay.textContent = `${playerScore}`;
    results.textContent = `🎉 You win! ${playerSelection} beats ${computerSelection} 🎉`;
    results.style.cssText = "color: #7FE500;";
  } else if (
    (playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "scissors" && computerSelection === "rock") ||
    (playerSelection === "paper" && computerSelection === "scissors")
  ) {
    ++computerScore;
    computerScoreDisplay.textContent = `${computerScore}`;
    results.textContent = `💥 You lose! ${computerSelection} beats ${playerSelection} 💥`;
    results.style.cssText = "color: #cd2c00;";
  } else {
    results.textContent =
      "Invalid user input. Please make sure to type a valid choice!";
  }

  if (playerScore === 5 || computerScore === 5) {
    for (const button of buttons) {
      button.disabled = true;
    }
    results.style.cssText = "color: #fff;";
    results.textContent = `${playerScore === 5 ? "YOU WIN" : "ULTIMATE LOSER"}`;
  }
}
