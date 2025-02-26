// BASIC LOGGING FUNCTION TO MAKE DEBUGGING MORE STREAMLINED

function log(x) {
  console.log(x);
}

// ARRAY FOR THE TOTAL POSSIBLE CHOICES
const computerChoices = ["rock", "paper", "scissors"];

// RANDOM NUMBER GENERATOR THAT ACCESSES A RANDOM ITEM FROM THE ARRAY DEPENDING ON THE VALUE OF THE RANDOM NUMBER

function randomNumberGenerator() {
  return Math.floor(Math.random() * 3);
}

// GENERATES RANDOM COMPUTER CHOICE BY INITIALISING THE RANDOM NUMBER GENERATOR AND THEN USING THE VALUE TO GRAB A RANDOM VALUE FROM THE ARRAY

function getComputerChoice() {
  let randomNumber = randomNumberGenerator();
  let computerChoice = computerChoices[randomNumber];
  log("computer choice: " + computerChoice);
  return computerChoice;
}

// PROMPTS THE USER TO GIVE ONE OF THE THREE VALID VALUES. REPEATS THE FUNCTION IN CASE OF AN INVALID VALUE.

// INVALID VALUE CONTINUATION IS BUGGED AND NEEDS TO BE DEBUGGED

function getHumanChoice() {
  let humanChoice = prompt(
    "Make your choice human! Rock, Paper or Scissors?",
    "rock"
  ).toLowerCase();
  log("human choice: " + humanChoice);

  if (computerChoices.includes(humanChoice) == false) {
    alert("Make a valid choice human!");
    getHumanChoice();
  } else if (computerChoices.includes(humanChoice) == true) {
    log(humanChoice);
    return humanChoice;
  }
  log(humanChoice);
}

// FUNCTION THAT KEEPS TAB OF THE SCORES AND INITIALISES A ROUND 5 TIMES UPDATING THE VALUES EACH TIME

function playGame() {
  let playerScore = 0;
  let computerScore = 0;

  function displayScores() {
    log("Player Score: " + playerScore);
    log("Computer Score: " + computerScore);
  }

  displayScores();

  // SWITCH CASE LOGIC DETERMINING THE WINNER OF EACH STANDOFF

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

  // WHILE LOOP THAT CAUSES THE GAMETO END AT 5 ROUNDS

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
