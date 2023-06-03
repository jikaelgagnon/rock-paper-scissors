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

function checkGameOver(playerScore, computerScore){
    if (+playerScore.textContent === 5 || +computerScore.textContent === 5)
    {
        const results = document.querySelector(".results");

        const buttons = document.querySelectorAll("button");
        buttons.forEach((button) => {button.disabled = true;});

        const newGameButton = document.createElement("button");
        newGameButton.textContent = "New game";
        newGameButton.addEventListener("click", () => {
            while (results.firstChild) results.firstChild.remove();
            playerScore.textContent = 0;
            computerScore.textContent = 0;
            buttons.forEach((button) => {button.disabled = false;});
        });
        results.append(newGameButton);
    }
  }

function playRound(playerSelection, computerSelection) {
    playerSelection = capitalize(playerSelection);
    computerSelection = capitalize(computerSelection);

    const winner = findWinner(playerSelection, computerSelection);
    const playerScore = document.querySelector(".player-score");
    const computerScore = document.querySelector(".computer-score");
    const results = document.querySelector(".results");
    const p = document.createElement("p");

    if (winner === 0) {
        p.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;
        computerScore.textContent = +computerScore.textContent + 1; 
    }
    else if (winner === 1) {
        p.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
        playerScore.textContent = +playerScore.textContent + 1; 
    }
    else p.textContent = `Tie!`;
    results.appendChild(p);
    checkGameOver(playerScore, computerScore);
  }

  function addChoiceButtons(){
    const container = document.querySelector(".buttons");
    let choices = ["Rock", "Paper", "Scissors"];
    for (const choice of choices) {
        const choiceButton = document.createElement("button");
        choiceButton.textContent = choice;
        choiceButton.addEventListener("click", () => {
            playRound(choice, getComputerChoice());});
        container.appendChild(choiceButton);
    }
  }

  function game(){
    let playerWins = 0;
    let computerWins = 0;
    addChoiceButtons();
  }

  game();
