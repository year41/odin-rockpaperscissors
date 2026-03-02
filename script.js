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

    const score = document.querySelector("#score");

    const resetbtn = document.createElement ("button");
    resetbtn.textContent = "Reset";
    resetbtn.addEventListener( "click", (event) => {
        score.textContent = "";
        result.textContent = "";
        humanScore = 0;
        computerScore = 0;
    });

    function playRound(human, computer) {
        if (human === computer) {
            result.textContent = `${human} vs ${computer}. That's a draw.`;
        } else if (human === 'Rock' & computer === 'Scissors') {
            result.textContent = 'Rock beats Scissors, You win!';
            humanScore ++;
        } else if (human === 'Paper' & computer === 'Rock'){
            result.textContent = 'Paper beats Rock, You win!';
            humanScore ++;
        } else if (human === 'Scissors' & computer === 'Paper'){
            result.textContent = 'Scissors beats Paper. You win!';
            humanScore ++;
        } else {
            result.textContent = `You lost! ${computer} beats ${human}.`;
            computerScore ++;
        };
        score.textContent = `Score = You: ${humanScore} - Computer: ${computerScore}`;

        if (humanScore === 5) {
            score.textContent = "You win!!! Go and celebrate, get drunk!";
            score.appendChild(resetbtn);
        } else if (computerScore === 5){
            score.textContent = "You lose!!! We're gonna cut your hands! (｀∀´)Ψ";
            score.appendChild(resetbtn);
        };
    };
};

playGame();