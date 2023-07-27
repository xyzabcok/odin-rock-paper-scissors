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
};

function getPlayerSelection() {
    const userChoice = prompt("Rock, paper, or scissors?");
    console.log(`You chose ${userChoice}`);
    return userChoice;
}

const computerChoice = getComputerChoice();
const playerChoice = getPlayerSelection();

function playGame(computerChoice, playerChoice) {
    if (computerChoice === 'rock' && playerChoice === 'paper') {
       return console.log(`Paper covers rock. You win!`);
    } else if (computerChoice === 'paper' && playerChoice === 'scissors') {
        return console.log(`Scissors cut paper. You win!`);
    } else if (computerChoice === 'scissors' && playerChoice === 'rock') {
        return console.log(`Rock beats scissors. You win!`);
    } else if (computerChoice === playerChoice) {
        return console.log(`It's a tie!`);
    } else {
        return console.log(`${computerChoice} beats ${playerChoice}. You lose.`);
    }
    }

playGame(computerChoice, playerChoice);