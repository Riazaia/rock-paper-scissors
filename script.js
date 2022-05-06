let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0;

const CHOICES = ["rock", "paper", "scissors"];

function computerPlay() {
  const number = Math.floor(Math.random() * CHOICES.length);
  return CHOICES[number];
}

let buttons = document.querySelectorAll("button");

buttons.forEach(button => {
  button.addEventListener('click', button => {
  playerSelection = button.target.id;
  playRound();
  })
})

let results = document.querySelector("#results p");
let info = document.querySelector("#info p");

function playRound() {
  info.textContent = "The player's choice was: " + playerSelection
  console.log("The player's choice was: " + playerSelection);
  computerSelection = computerPlay();
  info.textContent = "The computer's choice was: " + computerSelection
  console.log("The computer's choice was: " + computerSelection);

  if (playerSelection === computerSelection) {
	results.textContent = "⚔ It's a tie! ⚔"
    console.log("%c ⚔ It's a tie! ⚔ ", 'background-color: #1F1F1F; border-radius: 5px; color: #EEAE00; font-size: 16px; font-weight: 900');
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    ++playerScore;
	results.textContent = `🎉 You win! ${playerSelection} beats ${computerSelection} 🎉`
    console.log(`%c 🎉 You win! ${playerSelection} beats ${computerSelection} 🎉 `, 'background-color: #1F1F1F; border-radius: 5px; color: #7FE500; font-size: 16px; font-weight: 900');
  } else if (
    (playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "scissors" && computerSelection === "rock") ||
    (playerSelection === "paper" && computerSelection === "scissors")
  ) {
    ++computerScore;
	results.textContent = `💥 You lose! ${computerSelection} beats ${playerSelection} 💥`
    console.log(`%c 💥 You lose! ${computerSelection} beats ${playerSelection} 💥 `, 'background-color: #1F1F1F; border-radius: 5px; color: #cd2c00; font-size: 16px; font-weight: 900');
  } else {
	results.textContent = "Invalid user input. Please make sure to type a valid choice!"
    console.log("Invalid user input. Please make sure to type a valid choice!");
  }
  console.log("+-------------------+");
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

