let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0;

const CHOICES = ["rock", "paper", "scissors"];

function computerPlay() {
  const number = Math.floor(Math.random() * CHOICES.length);
  return CHOICES[number];
}

function playRound(computerSelection, playerSelection) {
  playerSelection = prompt(
    "Choose rock, paper, or scissors",
    "Rock"
  ).toLowerCase();
  console.log("The player's choice was: " + playerSelection);
  computerSelection = computerPlay();
  console.log("The computer's choice was: " + computerSelection);

  if (playerSelection === computerSelection) {
    console.log("It's a tie!");
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    ++playerScore;
    console.log(`You win! ${playerSelection} beats ${computerSelection}`);
  } else if (
    (playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "scissors" && computerSelection === "rock") ||
    (playerSelection === "paper" && computerSelection === "scissors")
  ) {
    ++computerScore;
    console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
  } else {
    console.log("Invalid user input. Please make sure to type a valid choice!");
  }
}

function game() {
  while (playerScore !== 3 && computerScore !== 3) {
    playRound(playerSelection, computerSelection);
    console.log("+----- SCORE -----+");
    console.log(`Player: ${playerScore}`);
    console.log(`Computer: ${computerScore}`);
    console.log("+-------------------+");
  }

  if (playerScore == 3) {
    return "Player wins!";
  } else {
    return "Computer wins!";
  }
}

console.log(game());
