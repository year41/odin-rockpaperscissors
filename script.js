function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    if (choice == 0) {
        return "Rock";
    } else if (choice == 1) {
        return "Paper";
    } else {
        return "Scissors";
    }
};

function getHumanChoice() {
    let choice = prompt("Please write your choice between Rock, Paper or Scissors.");
    return choice;
};

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    rock.addEventListener("click", (event) => {
        playRound("Rock", getComputerChoice())
    });

    paper.addEventListener("click", () => {
        playRound("Paper", getComputerChoice())
    });

    scissors.addEventListener("click", () => {
        playRound("Scissors", getComputerChoice())
    });

    function playRound(humanChoice, computerChoice) {
        const human = humanChoice.toLowerCase();
        const computer = computerChoice.toLowerCase();
    
        if (human === computer) {
            console.log("That's a draw.");
            return;
        } else if (human === 'rock' & computer === 'scissors') {
            console.log('You win! Rock beats Scissors');
            return humanScore ++;
        } else if (human === 'paper' & computer === 'rock'){
            console.log('You win! Paper beats Rock');
            return humanScore ++;
        } else if (human === 'scissors' & computer === 'paper'){
            console.log('You win! Scissors beats Paper');
            return humanScore ++;
        } else {
            console.log(`You lost! ${computer} beats ${human}`);
            return computerScore ++;
        }
    };

    // for (let round = 1; round < 6; round++) {
    //     console.log('Round: ', round);
    //     // playRound('paper', 'rock');
    //     playRound(getHumanChoice(), getComputerChoice());
    // };

    console.log('Your score = ', humanScore);
    console.log('Computer score = ', computerScore);

    if (humanScore > computerScore) {
        console.log("You won. Let's party!!!");
    } else if (computerScore > humanScore) {
        console.log("You lose, buuu!!!");
    } else {
        console.log("It's a draw. Try again, better luck next time!");
    }
};

playGame();