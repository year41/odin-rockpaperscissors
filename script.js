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

    const result = document.getElementById("result");

    function playRound(human, computer) {
        if (human === computer) {
            result.textContent = `${human} vs ${computer}. That's a draw.`;
            return;
        } else if (human === 'Rock' & computer === 'Scissors') {
            result.textContent = 'Rock beats Scissors, You win!';
            return humanScore ++;
        } else if (human === 'Paper' & computer === 'Rock'){
            result.textContent = 'Paper beats Rock, You win!';
            return humanScore ++;
        } else if (human === 'Scissors' & computer === 'Paper'){
            result.textContent = 'Scissors beats Paper. You win!';
            return humanScore ++;
        } else {
            result.textContent = `You lost! ${computer} beats ${human}.`;
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