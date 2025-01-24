const moves = ["rock", "paper", "scissors"];

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



function playGame() {
    let playerScore = 0;
    let computerScore = 0;
    let playedRounds = 0;
    function playRound(playerMove, computerMove) {
        if (playerMove == null) {
            console.log("Round voided. Try again.");
            return;
        }
        playedRounds++;
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

    while (playedRounds < 5) {
        playRound(getPlayerMove(), getComputerMove());
    }
    console.log(`Final scores:\nYou: ${playerScore}\nComputer:${computerScore}`);
    if (playerScore > computerScore) console.log("You win!");
    else if (playerScore == computerScore) console.log("Its a tie!");
    else console.log("You lose!");
}
