
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