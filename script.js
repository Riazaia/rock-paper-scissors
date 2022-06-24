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

const newGame = document.querySelector("button.reset");
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
const info = document.querySelector("#info p");
const playerScoreDisplay = document.querySelector("p.pscore");
const computerScoreDisplay = document.querySelector("p.cscore");

function playRound() {
  computerSelection = computerPlay();
  info.textContent = `The player's choice was: ${playerSelection}
  \nThe computer's choice was: ${computerSelection}`;

  if (playerSelection === computerSelection) {
    results.textContent = "⚔ It's a tie! ⚔";
    results.style.cssText =
      "background-color: #1F1F1F; border-radius: 5px; color: #EEAE00; font-size: 16px; font-weight: 900";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    ++playerScore;
    playerScoreDisplay.textContent = `${playerScore}`;
    results.textContent = `🎉 You win! ${playerSelection} beats ${computerSelection} 🎉`;
    results.style.cssText =
      "background-color: #1F1F1F; border-radius: 5px; color: #7FE500; font-size: 16px; font-weight: 900";
  } else if (
    (playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "scissors" && computerSelection === "rock") ||
    (playerSelection === "paper" && computerSelection === "scissors")
  ) {
    ++computerScore;
    computerScoreDisplay.textContent = `${computerScore}`;
    results.textContent = `💥 You lose! ${computerSelection} beats ${playerSelection} 💥`;
    results.style.cssText =
      "background-color: #1F1F1F; border-radius: 5px; color: #cd2c00; font-size: 16px; font-weight: 900";
  } else {
    results.textContent =
      "Invalid user input. Please make sure to type a valid choice!";
  }

  if (playerScore === 5 || computerScore === 5) {
    for (const button of buttons) {
      button.disabled = true;
    }
    results.style.cssText =
      "background-color: #1F1F1F; border-radius: 5px; color: #fff; font-size: 20px; font-weight: 900";
    results.textContent = `${playerScore === 5 ? "YOU WIN" : "ULTIMATE LOSER"}`;
  }
}

// function game() {
//   while (playerScore !== 3 && computerScore !== 3) {
//     playRound();
//     console.log("+----- SCORE -----+");
//     console.log(`Player: ${playerScore}`);
//     console.log(`Computer: ${computerScore}`);
//     console.log("+-------------------+");
//   }
//
//   if (playerScore == 3) {
//     return "Player wins!";
//   } else {
//     return "Computer wins!";
//   }
// }

// console.log(game());
