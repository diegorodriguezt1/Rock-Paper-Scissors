
function getComputerChoice() {
    let options = ['ROCK', 'PAPER', 'SCISSORS'];
    let rand = Math.floor(Math.random()*options.length);
    let pcDecision = options[rand];
    return (pcDecision);
}
let playerSelection = "";

function playRound(playerSelection, computerChoice) {
    while (!(playerSelection === "ROCK" ||playerSelection === "PAPER" ||playerSelection === "SCISSORS")) {
        playerSelection = prompt("What you gonna choose?", "")
        playerSelection = playerSelection.toUpperCase()
    }
    if (playerSelection === "ROCK" && computerChoice === "SCISSORS") {
        console.log("You Win! Rock beats Scissors")
    }
    else if (playerSelection === "PAPER" && computerChoice === "SCISSORS") {
        console.log("You Lose! Scissors cut Paper")
    }
    else if (playerSelection === "ROCK" && computerChoice === "PAPER") {
        console.log("You Lose! Paper wrap Rock")
    }
    else if (playerSelection === "PAPER" && computerChoice === "ROCK") {
        console.log("You Win! Paper wrap Rock")
    }
    else if (playerSelection === "SCISSORS" && computerChoice === "ROCK") {
        console.log("You Lose! Rock beats Scissors")
    }
    else if (playerSelection === "SCISSORS" && computerChoice === "PAPER") {
        console.log("You Win! Scissors cut Paper")
    }
    else if (playerSelection === computerChoice) {
        console.log("It's a Tie!!!")
    }
}

computerChoice = getComputerChoice();
console.log(playRound(playerSelection, computerChoice));