const btn = document.querySelector("button#start-game");
btn.addEventListener('click', () => {
  setScoreBar('Choose your weapon!');
  playerPlay();
});

function playerPlay(rounds=5) {
  const player = document.querySelectorAll("button.p-selection");
  let counter = 0;
  let playerScore = 0;
  let computerScore = 0;

  player.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const playerSelection = e.target.dataset.selection;
      const round_value = playRound(playerSelection, computerPlay());

      setScoreBar(round_value['message']);
      playerScore += round_value['playerScore'];
      computerScore += round_value['computerScore'];
      counter++;
      if (counter >= rounds) {
        setScoreBar(determineWinner(playerScore, computerScore));
        btn.replaceWith(btn.cloneNode(true));
      }
    });
  });
}

function setScoreBar(score) {
  const scoreBar = document.querySelector('.score-bar');
  scoreBar.textContent = score;
}

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
        message = `${playerSelection} loses against ${computerSelection}`;
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
        message = `${playerSelection} loses against ${computerSelection}`;
      }
      break;

    case "scissors":
      if (computerSelection == "rock") {
        computerScore = 1;
        message = `${playerSelection} loses against ${computerSelection}`;
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

function determineWinner(playerScore, computerScore) {
  if (playerScore == computerScore) {
    return "Tie!";
  } else if (playerScore > computerScore) {
    return "You Win!";
  } else {
    return "You lose!";
  }
}

function playGame(rounds=5) {
  
  for (i = 1; i <= rounds; i++) {
    computerSelection = computerPlay();
    round_value = playRound(playerSelection, computerSelection);

    playerScore += round_value["playerScore"];
    computerScore += round_value["computerScore"];

    console.log(`Player Score: ${playerScore} | Computer Score: ${computerScore}`);
    console.log(round_value["message"]);
  }

  
}
