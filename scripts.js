
function getComputerChoice() {
    let options = ['ROCK', 'PAPER', 'SCISSORS'];
    let rand = Math.floor(Math.random()*options.length);
    let pcDecision = options[rand];
    return (pcDecision);
}