// BASIC LOGGING FUNCTION TO MAKE DEBUGGING MORE STREAMLINED

function log(x) {
  // console.log(x);
}

// ARRAY FOR THE TOTAL POSSIBLE CHOICES
const computerChoices = ["rock", "paper", "scissors"];

// ARRAY FOR THE SRC ATTRIBUTE OF THE IMG ELEMENT

const imgSrc = ["fistPixel.png", "paperPixel.png", "scissorsPixel.png"];

// RANDOM NUMBER GENERATOR THAT ACCESSES A RANDOM ITEM FROM THE ARRAY DEPENDING ON THE VALUE OF THE RANDOM NUMBER

function randomNumberGenerator() {
  return Math.floor(Math.random() * 3);
}

// GENERATES RANDOM COMPUTER CHOICE BY INITIALISING THE RANDOM NUMBER GENERATOR AND THEN USING THE VALUE TO GRAB A RANDOM VALUE FROM THE ARRAY

let computerChoice = "";

function getComputerChoice() {
  let randomNumber = randomNumberGenerator();
  srcChanger(randomNumber);
  computerChoice = computerChoices[randomNumber];
  log("computer choice: " + computerChoice);
}

// GETS THE USER INPUT AND STORES THE VALUE.
let computerScore = 0;
let humanScore = 0;

const btnList = document.querySelectorAll(".human-choice-buttons");
btnList.forEach((btn) => {
  const handleClick = () => {
    if (computerScore < 5 && humanScore < 5) {
      let humanChoice = btn.lastElementChild.innerText.toLowerCase();
      log(humanChoice);
      computerChoices.forEach((choice) => {
        if (humanChoice == choice) {
          humanSrcChanger(computerChoices.indexOf(choice));
        }
      });
      getComputerChoice();
      roundIncrement();
      playRound(humanChoice, computerChoice);
    } else {
      // roundIncrement();
      btnList.forEach((btn) => (btn.disabled = true));
      // displayFinalResults(computerScore, humanScore);
    }
  };
  btn.addEventListener("click", handleClick);
});

// FUNCTION FOR INCREMENTING THE ROUND COUNTER

const roundCounter = document.querySelector(
  "body > div.round-counter > span.number.bungee-tint-regular"
);

function roundIncrement() {
  roundCounter.innerText = Number(roundCounter.innerText) + 1;
}

// FUNCTION TO MAKE A VISUAL OF THE CHOICE FOR THE COMPUTER AND THE USER

const compChangingImg = document.querySelector(
  "body > div.score-display.bungee-tint-regular > div.display-section > div.computer-choice-box > div.changing-img-comp > img"
);

function srcChanger(i) {
  compChangingImg.setAttribute("src", imgSrc[i]);
}

const humanChangingImg = document.querySelector(
  "body > div.score-display.bungee-tint-regular > div.display-section > div.human-choice-box > div.changing-img-human > img"
);

function humanSrcChanger(i) {
  humanChangingImg.setAttribute("src", imgSrc[i]);
}

// FUNCTION TO DISPLAY THE RESULT OF THE CURRENT ROUND

const resultBox = document.querySelector(
  "body > div.score-display.bungee-tint-regular > div.display-section > div.result-box"
);

function currentRoundResults(text) {
  resultBox.innerHTML = "";
  resultText = document.createTextNode(`${text}`);
  resultBox.appendChild(resultText);
  resultBox.style.display = "flex";
}

// FUNCTION TO DISPLAY THE SCORES

const computerScoreDisplay = document.querySelector(
  "body > div.score-display.bungee-tint-regular > div.scores > div.computer > span.computer-score-number"
);

const playerScoreDisplay = document.querySelector(
  "body > div.score-display.bungee-tint-regular > div.scores > div.human > span.human-score-number"
);

function scoreIncrement(faction) {
  if (humanScore < 4 && computerScore < 4) {
    if (faction == "human") {
      playerScoreDisplay.innerText = Number(playerScoreDisplay.innerText) + 1;
      ++humanScore;
    } else {
      computerScoreDisplay.innerText =
        Number(computerScoreDisplay.innerText) + 1;
      ++computerScore;
    }
  } else if (humanScore == 4 && computerScore == 4) {
    if (faction == "human") {
      playerScoreDisplay.innerText = Number(playerScoreDisplay.innerText) + 1;
      ++humanScore;
      displayFinalResults(computerScore, humanScore);
      btnList.forEach((btn) => (btn.disabled = true));
    } else {
      computerScoreDisplay.innerText =
        Number(computerScoreDisplay.innerText) + 1;
      ++computerScore;
      displayFinalResults(computerScore, humanScore);
      btnList.forEach((btn) => (btn.disabled = true));
    }
  } else if (humanScore == 4 && computerScore < 4) {
    if (faction == "human") {
      playerScoreDisplay.innerText = Number(playerScoreDisplay.innerText) + 1;
      ++humanScore;
      displayFinalResults(computerScore, humanScore);
      btnList.forEach((btn) => (btn.disabled = true));
    } else {
      computerScoreDisplay.innerText =
        Number(computerScoreDisplay.innerText) + 1;
      ++computerScore;
    }
  } else if (computerScore == 4 && humanScore < 4) {
    if (faction == "human") {
      playerScoreDisplay.innerText = Number(playerScoreDisplay.innerText) + 1;
      ++humanScore;
    } else {
      computerScoreDisplay.innerText =
        Number(computerScoreDisplay.innerText) + 1;
      ++computerScore;
      displayFinalResults(computerScore, humanScore);
      btnList.forEach((btn) => (btn.disabled = true));
    }
  }
}

// FUNCTION TO DISPLAY THE FINAL RESULT

const resultDisplaySection = document.querySelector(
  "body > div.score-display.bungee-tint-regular > div.display-section"
);

function displayFinalResults(computerScore, humanScore) {
  if (humanScore > computerScore) {
    // resultBox.innerText = "Congragulations! You win! Wanna play again?";
    resultBox.innerHTML = `<div> Congragulations! You win! Wanna play again?</div><div class="restart-button-container"><button class="restart">Yes</button><button class="restart">No</button></div>`;
  } else {
    // resultBox.innerText = "Unlucky! You lost! Wanna Try Again?";
    resultBox.innerHTML = `<div> Unlucky! You lost! Wanna Try Again?</div><div class="restart-button-container"><button class="restart">Yes</button><button class="restart">No</button></div>`;
  }
  const yes = document.querySelector(
    "body > div.score-display.bungee-tint-regular > div.display-section > div.result-box > div.restart-button-container > button:nth-child(1)"
  );

  const no = document.querySelector(
    "body > div.score-display.bungee-tint-regular > div.display-section > div.result-box > div.restart-button-container > button:nth-child(2)"
  );

  const humanChoiceDiv = document.querySelector(".human-choices");

  // FUNCTION TO PLAY THE GAME AGAIN

  yes.addEventListener("click", () => {
    window.location.reload();
  });

  const roundSection = document.querySelector("body > div.round-counter");
  const scoresSection = document.querySelector("div.scores");

  no.addEventListener("click", () => {
    resultDisplaySection.innerText = "Thanks for playing!";
    humanChoiceDiv.innerHTML = "";
    humanChoiceDiv.style.display = "none";
    roundSection.innerHTML = "";
    scoresSection.innerHTML = "";
  });
}

// FUNCTION TO CHECK THE LOGIC OF THE CHOICES

function playRound(humanChoice, computerChoice) {
  switch (humanChoice + "|" + computerChoice) {
    case "rock|rock":
      currentRoundResults("It's a tie! No one wins!");
      break;
    case "paper|paper":
      currentRoundResults("It's a tie! No one wins!");
      break;
    case "scissors|scissors":
      currentRoundResults("It's a tie! No one wins!");
      break;
    case "rock|paper":
      currentRoundResults("You lose! Paper beats rock!");
      scoreIncrement();
      break;
    case "paper|scissors":
      currentRoundResults("You lose! Scissors beats paper!");
      scoreIncrement();
      break;
    case "scissors|rock":
      currentRoundResults("You lose! Rock beats scissors!");
      scoreIncrement();
      break;
    case "paper|rock":
      currentRoundResults("You win! Paper beats rock!");
      scoreIncrement("human");
      break;
    case "scissors|paper":
      currentRoundResults("You win! Scissors beats paper!");
      scoreIncrement("human");
      break;
    case "rock|scissors":
      currentRoundResults("You win! Rock beats scissors!");
      scoreIncrement("human");
      break;
  }
}
