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
    return outcome;
}

function playGame() {
    let playerPoints = 0;
    let computerPoints = 0;
    for(let i = 0; i < 5; i++) {
        let choice = prompt("Enter rock, paper, or scissors");
        let checkChoice = choice.toLowerCase();
        while ((checkChoice != "rock") && (checkChoice != "paper") && (checkChoice != "scissors")) {
            choice = prompt("Enter ONLY rock, paper, or scissors (Not case sensitive)");
            checkChoice = choice.toLowerCase();
        }
        let computerChoice = getComputerChoice();
        let game = playRound(choice, computerChoice);
        
        if(game[0] == "win") {
            playerPoints++;
            console.log(game[1]);
        }
        else if (game[0] == "loss") {
            computerPoints++;
            console.log(game[1]);
        }
        else if (game[0] == "tie") {
            console.log(game[1]);
        }
    }
    if(playerPoints > computerPoints) {
        console.log("Game Over. You Win!");
    }
    else if(computerPoints > playerPoints) {
        console.log("Game Over. Computer Wins! Womp Womp");
    }
    else {
        console.log("Game Over. Tie!");
    }
}