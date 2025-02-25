function log(x) {
  console.log(x);
}

const computerChoices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;
// log("Player Score: " + playerScore);
// log("Computer Score: " + computerScore);

function displayScores() {
  log("Player Score: " + playerScore);
  log("Computer Score: " + computerScore);
}

displayScores();

function randomNumberGenerator() {
  return Math.floor(Math.random() * 3);
}

function getComputerChoice() {
  let randomNumber = randomNumberGenerator();
  let computerChoice = computerChoices[randomNumber];
  log("computer choice: " + computerChoice);
  return computerChoice;
}

getComputerChoice();

function getHumanChoice() {
  let humanChoice = prompt(
    "Make your choice human! Rock, Paper or Scissors?",
    "rock"
  ).toLowerCase();
  log("human choice: " + humanChoice);

  if (computerChoices.includes(humanChoice) == false) {
    alert("Make a valid choice human!");
    console.clear();
    getHumanChoice();
  }
  return humanChoice;
}

getHumanChoice();

function playRound(humanChoice, computerChoice) {
  switch ((humanChoice, computerChoice)) {
    case 0:
      humanChoice == computerChoice;
      log("It's a tie! Nobody wins this round.");
      displayScores();
      break;
    case 1:
      humanChoice == "rock" && computerChoice == "paper";
      log("You lose! Paper beats rock!");
      computerScore++;
      displayScores();
  }
}

playRound(getHumanChoice, getComputerChoice);
