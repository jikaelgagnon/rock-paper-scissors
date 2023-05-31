function getRandomInt(max) {
    return Math.floor(Math.random()*max);
}

function getComputerChoice() {
    const choice = getRandomInt(3);
    if (choice === 0) return "rock";
    else if (choice === 1) return "paper";
    return "scissors";
}

function capitalize(word){
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

function findWinner(playerSelection, computerSelection) {

    // 0 = computer win, 1 = player win, 2 = tie
    if (playerSelection === computerSelection) return 2;
    let winner = +(
        (playerSelection === "Rock" && computerSelection === "Scissors") ||
        (playerSelection === "Paper" && computerSelection === "Rock") ||
        (playerSelection === "Scissors" && computerSelection === "Paper")
    );
    return winner;
}

function playRound(playerSelection, computerSelection) {
    playerSelection = capitalize(playerSelection);
    computerSelection = capitalize(computerSelection);

    const winner = findWinner(playerSelection, computerSelection);

    if (winner === 0) {
        console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
    }
    else if (winner === 1) {
        console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
    }
    else console.log(`Tie!`);

    return winner;
  }

  function game(){
    let playerWins = 0;
    let computerWins = 0;
    for (let matches = 0; matches < 5; matches++){
        let playerSelection = prompt("Enter rock, paper, or scissors");
        let computerSelection = getComputerChoice();
        let roundWinner = playRound(playerSelection, computerSelection);

        if (roundWinner === 0) computerWins++;
        else if (roundWinner === 1) playerWins++;
    }

    if (playerWins > computerWins) console.log("------- You won!");
    else if (computerWins > playerWins) console.log("------- You lost!");
    else console.log("------- Tie!");

  }

  game();
