const btn = document.querySelector("button#start-game");
btn.addEventListener('click', () => {
  const player = document.querySelectorAll("button.p-selection");
  removeEventListenerList(player);
  setScoreMessage('Choose your weapon!');
  setRound(1);
  playGame();
});

function playGame(rounds=5) {
  const player = document.querySelectorAll("button.p-selection");
  let counter = 0;
  let playerScore = 0;
  let computerScore = 0;

  player.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const playerSelection = e.target.dataset.selection;
      const computerSelection = computerPlay();
      const round_value = playRound(playerSelection, computerSelection);

      playerScore += round_value['playerScore'];
      computerScore += round_value['computerScore'];
      counter++;

      setScoreMessage(round_value['message']);
      setRound(counter);
      setPlayerSelection(playerSelection);
      setComputerSelection(computerSelection);
      setPlayerScore(playerScore);
      setComputerScore(computerScore);

      if (counter >= rounds) {
        setScoreMessage(determineWinner(playerScore, computerScore));
        removeEventListenerList(player);
        return;
      }
    });
  });
}

function removeEventListenerList(nodeList) {
  nodeList.forEach(node => {
    node.replaceWith(node.cloneNode(true));
  })
}

function setScoreMessage(message) {
  const scoreBar = document.querySelector('.score-bar');
  scoreBar.textContent = message;
}

function setPlayerScore(score) {
  const playerScore = document.querySelector(`#player-score`);
  playerScore.textContent = `Score: ${score}`;
}

function setComputerScore(score) {
  const computerScore = document.querySelector(`#computer-score`);
  computerScore.textContent = `Score: ${score}`;
}

function setRound(num) {
  const round = document.querySelector('#rounds');
  round.textContent = `Round ${num}`;
}

function setPlayerSelection(selection) {
  const playerSelection = document.querySelector('#player-selector');
  playerSelection.textContent = `Player: ${selection}`;
}

function setComputerSelection(selection) {
  const computerSelection = document.querySelector('#computer-selector');
  computerSelection.textContent = `Computer: ${selection}`;
}

function computerPlay() {
  hand = ["rock", "paper", "scissors"];
  value = Math.floor(Math.random() * 3);
  return hand[value];
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



