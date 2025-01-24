const moves = ["rock", "paper", "scissors"];

let playerScore = 0;
let computerScore = 0;

function getComputerMove() {
    return moves[Math.floor(Math.random() * 3)];
}

function getPlayerMove() {
    let move = prompt("Enter your move:");
    if (move === moves[0] || move === moves[1] || move === moves[2]) {
        return move.toLowerCase();
    }
    console.log("Error. Invalid move.");
    return null;
}

function playRound(playerMove, computerMove) {
    if (playerMove == null) {
        console.log("Round voided. Try again.");
        return;
    }
    if (playerMove == computerMove) {
        console.log("Round tied. Both players did the same move!");
    } else if ((playerMove === moves[0] && computerMove === moves[2]) ||
                (playerMove === moves[1] && computerMove === moves[0]) ||
                (playerMove === moves[2] && computerMove === moves[1])) {
        console.log("You win! " + playerMove + " beats " + computerMove + "!");
        playerScore++;
    } else {
        console.log("You lose! " + computerMove + " beats " + playerMove + "!");
        computerScore++;
    }
}

playRound(getPlayerMove(), getComputerMove());