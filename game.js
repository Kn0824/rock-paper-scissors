function getComputerChoice() {
    let cChoice = Math.floor((Math.random() * 3) + 1);
    switch(cChoice) {
        case 1:
            return "rock";
            break;
        case 2:
            return "paper";
        case 3:
            return "scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    let playerChoice = playerSelection.toLowerCase();
    const outcome = [];
    if(playerChoice == "rock") {
        switch(computerSelection) {
            case "rock":
                outcome[0] = "tie";
                outcome[1] = "Tie! No points given";
                break;
            case "paper":
                outcome[0] = "loss";
                outcome[1] = "You Lose! Paper beats Rock";
                break;
            case "scissors":
                outcome[0] = "win";
                outcome[1] = "You Win! Rock beats Scissors";
                break;
        }
    }

    if(playerChoice == "paper") {
        switch(computerSelection) {
            case "rock":
                outcome[0] = "win";
                outcome[1] = "You Win! Paper beats Rock";
                break;
            case "paper":
                outcome[0] = "tie";
                outcome[1] = "Tie! No points given";
                break;
            case "scissors":
                outcome[0] = "loss";
                outcome[1] = "You Lose! Scissors beats Paper";
                break;
        }
    }

    if(playerChoice == "scissors") {
        switch(computerSelection) {
            case "rock":
                outcome[0] = "loss";
                outcome[1] = "You Lose! Rock beats Scissors";
                break;
            case "paper":
                outcome[0] = "win";
                outcome[1] = "You Win! Scissors beats Paper";
                break;
            case "scissors":
                outcome[0] = "tie";
                outcome[1] = "Tie! No points given";
                break;
        }
    }
    if(outcome[0] == "win") {
        playerCount++;
        playerPoints.textContent = playerCount;
        displayResult.textContent = outcome[1];
        if(playerCount == 5) {
            setTimeout(function() {
                alert("Player Wins! Resetting game")
                resetGame();
            }, 10);
        }
    }
    else if (outcome[0] == "loss") {
        computerCount++;
        computerPoints.textContent = computerCount;
        displayResult.textContent = outcome[1];
        if(computerCount == 5) {
            setTimeout(function() {
                alert("Computer Wins! Resetting game")
                resetGame();
            }, 10);
        }
    }
    else if (outcome[0] == "tie") {
        displayResult.textContent = outcome[1];
    }

}

function resetGame() {
    computerCount = 0;
    playerCount = 0;
    computerPoints.textContent = computerCount;
    playerPoints.textContent = playerCount;
}

const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorsButton = document.querySelector(".scissors");
const displayResult = document.querySelector(".result");
let playerCount = 0;
let computerCount = 0;

rockButton.addEventListener("click", function() {
    playRound("rock", getComputerChoice());
});
paperButton.addEventListener("click", function() {
    playRound("paper", getComputerChoice());
});
scissorsButton.addEventListener("click", function() {
    playRound("scissors", getComputerChoice());
});

const player = document.querySelector(".playerPoints");
const playerPoints = player.querySelector(".points");

const computer = document.querySelector(".computerPoints");
const computerPoints = computer.querySelector(".points");