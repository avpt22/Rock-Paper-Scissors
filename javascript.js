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



function computerPlay () {
        const choices = ["rock", "paper", "scissors"];
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
