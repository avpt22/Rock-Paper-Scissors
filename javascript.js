/* Computer vs player

    Fist to five points win

    If player choose rock and computer choose rock
        Then tie and no points
        Play again
    If player choose scissors and computer choose scissors
        Then tie and no points
        Play again
    If player choose paper and computer choose paper
        Then tie and no points
        Play again
    
    If player choose rock and computer choose scissors
        Then player gets one point
    If player choose paper and computer choose rock
        Then player gets one point
    If player choose scissors and computer choose paper
        Then player gets one point

    If player choose scissors and computer choose rock
        Then computer gets one point
    If player choose paper and computer choose scissors
        Then computer gets one point
    If player choose rock and computer choose paper
        Then computer gets one point

    Keep score till computer or player gets five points
*/


const choices = ["rock", "paper", "scissors"];

function computerPlay () {
        let computerChoice = Math.floor(Math.random() * choices.length);
        if (computerChoice === 0) {
            return "rock";
        }
        if (computerChoice === 1) {
            return "paper";
        }
        if (computerChoice === 2) {
            return "scissors";
        }
}

console.log(computerPlay());

const computerSelection = computerPlay();
let playerSelection = prompt('Rock, paper or scissors?').toLowerCase();

function playRound (playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "rock") {
        return "That's a tie.";
    }
    if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You win! Rock beats scissors.";
    }
    if (playerSelection === "rock" && computerSelection === "paper") {
        return "You lose! Paper beats rock.";
    }
    if (playerSelection === "paper" && computerSelection === "paper") {
        return "That's a tie.";
    }
    if (playerSelection === "paper" && computerSelection === "scissors") {
        return "You lose! Scissors beats paper.";
    } 
    if (playerSelection === "paper" && computerSelection === "rock") {
        return "You win! Paper beats rock.";
    }
    if (playerSelection === "scissors" && computerSelection === "scissors") {
        return "That's a tie.";
    }
    if (playerSelection === "scissors" && computerSelection === "rock") {
        return "You lose! Rock beats scissors.";
    }
    if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You win! Scissors beats paper."
    }
}





console.log(playRound(playerSelection, computerSelection));
