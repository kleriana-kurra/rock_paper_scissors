function computerPlay()
{
    let choises = ['rock', 'paper', 'scissors']
    return coise[Math.floor(Math.random() * choises.length)]
}

let roundWinner = ''
let palyerScore = 0
let computerScore = 0


function playRound(playerSelection, computerSelection)
{
    if(playerSelection === computerSelection)
    {
        roundWinner = 'Tie'
    }
    if((playerSelection === 'ROCK' && computerSelection ==="SCISSORS") || (playerSelection === "SCISSORS" && computerSelection === "PAPER") || (playerSelection === 'PAPER' && computerSelection === 'ROCK'))
    {
        palyerScore++
        roundWinner = 'player'
    }
    if((computerSelection === 'ROCK' && playerSelection ==="SCISSORS") || (computerSelection === "SCISSORS" && playerSelection === "PAPER") || (computerSelection === 'PAPER' && playerSelection === 'ROCK'))
    {
        palyerScore++
        roundWinner = 'player'
    }
    updateScoreMessage(roundWinner, playerSelection, computerSelection)
}

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));

function game()
{
    for(let i = 0; i < 5; i++)
    {
        function playRound(playerSelection, computerSelection)
    }
}