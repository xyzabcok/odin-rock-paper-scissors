function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    switch (randomNumber) {
        case 1: 
            console.log('Computer chose Rock...');
            return 'rock'
            break;
        case 2:
            console.log('Computer chose Paper...');
            return 'paper'
            break;
        case 3: 
            console.log('Computer chose Scissors...');
            return 'scissors'
            break;
    }
}

function getPlayerSelection() {
    const userChoice = prompt("Rock, paper, or scissors?");
    console.log(`You chose ${userChoice}`);
    return userChoice;
}

let playerPoints = 0;
let computerPoints = 0;

function playGame(computerChoice, playerChoice) {
    if (computerChoice === 'rock' && playerChoice === 'paper') {
        playerPoints++;
       return console.log(`Paper covers rock. You win!
       Current score is PC: ${computerPoints}, human: ${playerPoints}`);
    } else if (computerChoice === 'paper' && playerChoice === 'scissors') {
        playerPoints++;
        return console.log(`Scissors cut paper. You win!
        Current score is PC: ${computerPoints}, human: ${playerPoints}`);
    } else if (computerChoice === 'scissors' && playerChoice === 'rock') {
        playerPoints++;
        return console.log(`Rock beats scissors. You win!
        Current score is PC: ${computerPoints}, human: ${playerPoints}`);
    } else if (computerChoice === playerChoice) {
        return console.log(`It's a tie!
        Current score is PC: ${computerPoints}, human: ${playerPoints}`);
    } else {
        computerPoints++;
        return console.log(`${computerChoice} beats ${playerChoice}. You lose.
        Current score is PC: ${computerPoints}, human: ${playerPoints}
        `);
    }
    }

function game() {
    for (let i = 1; i < 6; i++) {
        console.log(`=== ROUND ${i} ===`)
        playGame(getComputerChoice().toLowerCase(), getPlayerSelection().toLowerCase());
    } 
}

game();
