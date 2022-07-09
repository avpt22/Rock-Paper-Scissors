    function computerPlay () {
        const choices = ["rock", "paper", "scissors"];
        let randomChoice = choices[Math.floor(Math.random() * choices.length)];
        
        if (randomChoice === 0) {
            return "rock";
        }
        if (randomChoice === 1) {
            return "paper";
        }
        if (randomChoice === 2) {
            return "scissors";
        }
}

console.log(computerPlay());
