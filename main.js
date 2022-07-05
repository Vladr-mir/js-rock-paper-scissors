function computerPlay() {
  hand = ["rock", "paper", "scissors"];
  value = Math.floor(Math.random() * 3);
  return hand[value];
}

function playRound(playerSelection, computerSelection){
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();
  round_value = {"playerScore": 0, "computerScore": 0, "message": ``};

  if (playerSelection == computerSelection) {
    round_value["message"] = `invalid value`;
    return round_value;
  }

  switch (playerSelection) {
    case "rock":
      if (computerSelection == "paper") {
        round_value["computerScore"] = 1;
        round_value["message"] = `${computerSelection} defeats ${playerSelection}`;
      }
      if (computerSelection == "scissors") {
        round_value["playerScore"] = 1;
        round_value["message"] = `${playerSelection} defeats ${computerSelection}`;
      }
      break;
    
    case "paper":
      if (computerSelection == "rock") {
        round_value["playerScore"] = 1;
        round_value["message"] = `${playerSelection} defeats ${computerSelection}`;
      }
      if (computerSelection == "scissors") {
        round_value["computerScore"] = 1;
        round_value["message"] = `${computerSelection} defeats ${playerSelection}`;
      }
      break;

    case "scissors":
      if (computerSelection == "rock") {
        round_value["computerScore"] = 1;
        round_value["message"] = `${computerSelection} defeats ${playerSelection}`;
      }
      if (computerSelection == "paper") {
        round_value["playerScore"] = 1;
        round_value["message"] = `${playerSelection} defeats ${computerSelection}`;
      }
      break;
    default:
      round_value["message"] = `invalid value`;
  }

  return round_value;
}

function game(rounds=5) {
  playerScore = 0;
  computerScore = 0;

  playerSelection = "";
  computerSelection = "";

  round_value = {};

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

game(5);
