function getComputerChoice() {
    const computerChoice = Math.random();
    if (computerChoice < 0.34){
      return "rock";
    }
    else if (computerChoice >= 0.34 && computerChoice <= 0.67){
      return "paper";
    }
    else {
      return "scissors";
    }
  }
  
  const computerChoice = getComputerChoice();
  
  function getPlayerChoice() {
    const playerChoice = prompt("What do you want to throw: Rock, Paper or Scissors?").toLowerCase();
    if (playerChoice === "rock" && computerChoice === "scissors") {
      console.log("You won!");
    } else if (playerChoice === "rock" && computerChoice === "paper") {
      console.log("You lost :((");
    } else if (playerChoice === "scissors" && computerChoice === "rock") {
      console.log("You lost :((");
    } else if (playerChoice === "scissors" && computerChoice === "paper") {
      console.log("You won!");
    } else if (playerChoice === "paper" && computerChoice === "rock") {
      console.log("You won!");
    } else if (playerChoice === "paper" && computerChoice === "scissors") {
      console.log("You lost :((");
    } else {
      console.log("It's a tie, try again.");
    }
  }
  
  getPlayerChoice();  
  
}