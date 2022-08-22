
function getComputerChoice() {
    let options = ['ROCK', 'PAPER', 'SCISSORS'];
    let rand = Math.floor(Math.random()*options.length);
    let pcDecision = options[rand];
    return (pcDecision);
}

let playerSelection = "";
let userPoints = 0;
let pcPoints = 0;
let relator = "";
let match = "";

const body = document.body
const rock = document.querySelector(".rock")
const paper = document.querySelector(".paper")
const scissors = document.querySelector(".scissors")
const round = document.querySelector(".round")
const userScore = document.querySelector(".user")
const pcScore = document.querySelector(".pc")
const finish = document.querySelectorAll(".active")

function playRound(playerSelection) {
    let computerChoice = getComputerChoice();
    if (playerSelection === "ROCK" && computerChoice === "SCISSORS") {
        ++userPoints;
        return relator = "You Win! Rock beats Scissors"
    }
    else if (playerSelection === "PAPER" && computerChoice === "SCISSORS") {
        ++pcPoints;
        return relator = "You Lose! Scissors cut Paper"
    }
    else if (playerSelection === "ROCK" && computerChoice === "PAPER") {
        ++pcPoints;
        return relator = "You Lose! Paper wrap Rock"
    }
    else if (playerSelection === "PAPER" && computerChoice === "ROCK") {
        ++userPoints;
        return relator = "You Win! Paper wrap Rock"
    }
    else if (playerSelection === "SCISSORS" && computerChoice === "ROCK") {
        ++pcPoints;
        return relator = "You Lose! Rock beats Scissors"
    }
    else if (playerSelection === "SCISSORS" && computerChoice === "PAPER") {
        ++userPoints;
        return relator = "You Win! Scissors cut Paper"
    }
    else if (playerSelection === computerChoice) {
        return relator = "It's a Tie!!!"
    }
}

function game() {
    if (!(pcPoints === 5 || userPoints === 5)) {
        playRound(playerSelection);
        computerChoice = getComputerChoice();
    }
    if (userPoints === 5) {
        setTimeout(() => finishGame() ,200)
        return match = "Congratulations!!! You are the WINNER!!"
    } else if (pcPoints === 5) {
        setTimeout(() => finishGame() ,200)
        return match = "Sorry, you lose =( "
    }
}

rock.addEventListener("click", () => { 
    playRound("ROCK")
    game()
    round.textContent = relator
    userScore.textContent = userPoints
    pcScore.textContent = pcPoints
})
paper.addEventListener("click", () => { 
    playRound("PAPER")
    game()
    round.textContent = relator
    userScore.textContent = userPoints
    pcScore.textContent = pcPoints
});
scissors.addEventListener("click", () => {
    playRound("SCISSORS")
    game()
    round.textContent = relator
    userScore.textContent = userPoints
    pcScore.textContent = pcPoints
});