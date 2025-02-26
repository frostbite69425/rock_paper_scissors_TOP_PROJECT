function log(x) {
  console.log(x);
}

const computerChoices = ["rock", "paper", "scissors"];

function randomNumberGenerator() {
  return Math.floor(Math.random() * 3);
}

function getComputerChoice() {
  let randomNumber = randomNumberGenerator();
  let computerChoice = computerChoices[randomNumber];
  log("computer choice: " + computerChoice);
  return computerChoice;
}

function getHumanChoice() {
  let humanChoice = prompt(
    "Make your choice human! Rock, Paper or Scissors?",
    "rock"
  ).toLowerCase();
  log("human choice: " + humanChoice);

  if (computerChoices.includes(humanChoice) == false) {
    alert("Make a valid choice human!");
    getHumanChoice();
  }
  return humanChoice;
}

function playGame() {
  let playerScore = 0;
  let computerScore = 0;

  function displayScores() {
    log("Player Score: " + playerScore);
    log("Computer Score: " + computerScore);
  }

  displayScores();

  function playRound(humanChoice, computerChoice) {
    switch (humanChoice + "|" + computerChoice) {
      case "rock|rock":
        log("It's a tie! No one wins!");
        displayScores();
        break;
      case "paper|paper":
        log("It's a tie! No one wins!");
        displayScores();
        break;
      case "scissors|scissors":
        log("It's a tie! No one wins!");
        displayScores();
        break;
      case "rock|paper":
        log("You lose! Paper beats rock!");
        computerScore++;
        displayScores();
        break;
      case "paper|scissors":
        log("You lose! Scissors beats paper!");
        computerScore++;
        displayScores();
        break;
      case "scissors|rock":
        log("You lose! Rock beats scissors!");
        computerScore++;
        displayScores();
        break;
      case "paper|rock":
        log("You win! Paper beats rock!");
        playerScore++;
        displayScores();
        break;
      case "scissors|paper":
        log("You win! Scissors beats paper!");
        playerScore++;
        displayScores();
        break;
      case "rock|scissors":
        log("You win! Rock beats scissors!");
        playerScore++;
        displayScores();
        break;
    }
  }

  let rounds = 0;

  while (rounds < 5) {
    log("ROUND: " + Number(rounds + 1));
    playRound(getHumanChoice(), getComputerChoice());
    rounds++;
  }

  if (playerScore > computerScore) {
    log("You win! Congragulations!");
  } else if (playerScore == computerScore) {
    log("It's a tie! Nobody wins!");
  } else {
    log("You lost! Wanna try again?");
  }
}

playGame();
