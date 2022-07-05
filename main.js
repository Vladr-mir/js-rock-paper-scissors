function computerPlay() {
  hand = ["rock", "paper", "scissors"];
  value = Math.floor(Math.random() * 3);
  return hand[value];
}

function playRound(playerSelection, computerSelection){
  if (playerSelection == computerSelection) {
    return 0
  }

  switch (playerSelection) {
    case "rock":
      if (computerSelection == "paper") {
        return -1;
      }
      if (computerSelection == "scissors") {
        return 1;
      }
      break;
    
    case "paper":
      if (computerSelection == "rock") {
        return 1;
      }
      if (computerSelection == "scissors") {
        return -1;
      }
      break;

    case "scissors":
      if (computerSelection == "rock") {
        return -1;
      }
      if (computerSelection == "paper") {
        return 1;
      }
      
      break;
  }
}

