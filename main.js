function playRound(playerSelection, computerSelection) {
  if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock")
  ) {
    return "You won!";
  } else if (playerSelection === computerSelection) {
    return "It's a tie.";
  } else {
    return "You lost :((";
  }
}

function game() {
  let playerScore = 0;
  let compScore = 0;

  function getComputerChoice() {
    const computerChoice = Math.random();
    if (computerChoice < 0.34) {
      return "rock";
    } else if (computerChoice >= 0.34 && computerChoice <= 0.67) {
      return "paper";
    } else {
      return "scissors";
    }
  }

  function updateScore() {
    const scoreContainer = document.getElementById("score");
    scoreContainer.textContent = `Score: You ${playerScore} - ${compScore} Computer`;
  }

  function updateResult(result) {
    const resultContainer = document.getElementById("result");
    resultContainer.textContent = result;
  }

  function getPlayerChoice(e) {
    const playerChoice = e.target.getAttribute("data-choice");
    const computerChoice = getComputerChoice();
    const roundResult = playRound(playerChoice, computerChoice);

    if (roundResult === "You won!") {
      playerScore++;
    } else if (roundResult === "You lost :((") {
      compScore++;
    }

    updateScore();
    updateResult(roundResult);

    if (playerScore === 5) {
      updateResult("You win the game!");
      disableButtons();
    } else if (compScore === 5) {
      updateResult("Computer wins the game!");
      disableButtons();
    }
  }

  function disableButtons() {
    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorsButton.disabled = true;
  }

  const container = document.createElement("div");

  const rockButton = document.createElement("button");
  rockButton.textContent = "Rock";
  rockButton.setAttribute("data-choice", "rock");
  rockButton.addEventListener("click", getPlayerChoice);
  container.appendChild(rockButton);

  const paperButton = document.createElement("button");
  paperButton.textContent = "Paper";
  paperButton.setAttribute("data-choice", "paper");
  paperButton.addEventListener("click", getPlayerChoice);
  container.appendChild(paperButton);

  const scissorsButton = document.createElement("button");
  scissorsButton.textContent = "Scissors";
  scissorsButton.setAttribute("data-choice", "scissors");
  scissorsButton.addEventListener("click", getPlayerChoice);
  container.appendChild(scissorsButton);

  const resultContainer = document.createElement("div");
  resultContainer.id = "result";

  const scoreContainer = document.createElement("div");
  scoreContainer.id = "score";

  document.body.appendChild(container);
  document.body.appendChild(resultContainer);
  document.body.appendChild(scoreContainer);
}

game();
