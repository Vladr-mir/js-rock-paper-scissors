const btn = document.querySelector("#start-game");

btn.addEventListener('click', () => {
  playGame();
});

function computerPlay() {
  hand = ["rock", "paper", "scissors"];
  value = Math.floor(Math.random() * 3);
  return hand[value];
}

function playRound(playerSelection, computerSelection){
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();
  let round_value = {"playerScore": 0, "computerScore": 0, "message": ``};
  let message = ``;
  let playerScore = 0;
  let computerScore = 0;

  if (playerSelection == computerSelection) {
    message = `tie`;
  }

  switch (playerSelection) {
    case "rock":
      if (computerSelection == "paper") {
        computerScore = 1;
        message = `${computerSelection} defeats ${playerSelection}`;
      }
      if (computerSelection == "scissors") {
        playerScore = 1;
        message = `${playerSelection} defeats ${computerSelection}`;
      }
      break;
    
    case "paper":
      if (computerSelection == "rock") {
        playerScore = 1;
        message = `${playerSelection} defeats ${computerSelection}`;
      }
      if (computerSelection == "scissors") {
        computerScore = 1;
        message = `${computerSelection} defeats ${playerSelection}`;
      }
      break;

    case "scissors":
      if (computerSelection == "rock") {
        computerScore = 1;
        message = `${computerSelection} defeats ${playerSelection}`;
      }
      if (computerSelection == "paper") {
        playerScore = 1;
        message = `${playerSelection} defeats ${computerSelection}`;
      }
      break;
    default:
      message = `invalid value`;
      break;
  }

  round_value["message"] = message;
  round_value["computerScore"] = computerScore;
  round_value["playerScore"] = playerScore;
  return round_value;
}

function playGame(rounds=5) {
  let playerScore = 0;
  let computerScore = 0;

  let playerSelection = "";
  let computerSelection = "";

  let round_value = {};

  for (i = 1; i <= rounds; i++) {
    playerSelection = prompt("Enter your selection: ");
    computerSelection = computerPlay();
    round_value = playRound(playerSelection, computerSelection);

    playerScore += round_value["playerScore"];
    computerScore += round_value["computerScore"];

    console.log(`Player Score: ${playerScore} | Computer Score: ${computerScore}`);
    console.log(round_value["message"]);
  }

  if (playerScore == computerScore) {
    console.log("Tie!");
  } else if (playerScore > computerScore) {
    console.log("You Win!");
  } else {
    console.log("You lose!");
  }
}


