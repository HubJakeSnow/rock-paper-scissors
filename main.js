function playRound(playerSelection, computerSelection) {
    if (
      (playerSelection === "rock" && computerSelection === "scissors") ||
      (playerSelection === "scissors" && computerSelection === "paper") ||
      (playerSelection === "paper" && computerSelection === "rock")
    ) {
      console.log("You won!");
      return 1;
    } else if (playerSelection === computerSelection) {
      console.log("It's a tie.");
      return 0;
    } else {
      console.log("You lost :((");
      return -1;
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
  
    function getPlayerChoice() {
      const playerChoice = prompt(
        "What do you want to throw: Rock, Paper or Scissors?"
      ).toLowerCase();
      return playerChoice;
    }
  
    while (playerScore < 5 && compScore < 5) {
      const playerChoice = getPlayerChoice();
      const computerChoice = getComputerChoice();
      const roundResult = playRound(playerChoice, computerChoice);
      if (roundResult === 1) {
        playerScore++;
      } else if (roundResult === -1) {
        compScore++;
      }
      console.log(`Score: You ${playerScore} - ${compScore} Computer`);
    }
  
    if (compScore === 5) {
      console.log("Computer wins the game!");
    } else {
      console.log("You win the game!");
    }
  }
  
  game();  