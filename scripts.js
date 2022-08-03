
function getComputerChoice() {
    let options = ['ROCK', 'PAPER', 'SCISSORS'];
    let rand = Math.floor(Math.random()*options.length);
    let pcDecision = options[rand];
    return (pcDecision);
}

let computerChoice = getComputerChoice();
let playerSelection = "";
let userPoints = 0;
let pcPoints = 0;

function playRound(playerSelection, computerChoice) {
    while (!(playerSelection === "ROCK" ||playerSelection === "PAPER" ||playerSelection === "SCISSORS")) {
        playerSelection = prompt("What you gonna choose?", "")
        playerSelection = playerSelection.toUpperCase()
    }
    if (playerSelection === "ROCK" && computerChoice === "SCISSORS") {
        ++userPoints;
        return ("You Win! Rock beats Scissors");
    }
    else if (playerSelection === "PAPER" && computerChoice === "SCISSORS") {
        ++pcPoints;
        return ("You Lose! Scissors cut Paper")
    }
    else if (playerSelection === "ROCK" && computerChoice === "PAPER") {
        ++pcPoints;
        return ("You Lose! Paper wrap Rock")
    }
    else if (playerSelection === "PAPER" && computerChoice === "ROCK") {
        ++userPoints;
        return ("You Win! Paper wrap Rock")
    }
    else if (playerSelection === "SCISSORS" && computerChoice === "ROCK") {
        ++pcPoints;
        return ("You Lose! Rock beats Scissors")
    }
    else if (playerSelection === "SCISSORS" && computerChoice === "PAPER") {
        ++userPoints;
        return ("You Win! Scissors cut Paper")
    }
    else if (playerSelection === computerChoice) {
        ++pcPoints;
        ++userPoints;
        return ("It's a Tie!!!")
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        console.log(playRound(playerSelection, computerChoice));
        computerChoice = getComputerChoice();
    }
    if (userPoints > pcPoints) {
        return ("Congratulations!!! You are the WINNER!!")
    } else {
        return ("Sorry, you lose =( ")
    }
}

console.log(game());