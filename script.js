
let playerScore = 0;
let computerScore = 0;

// computer randomly picks rock, paper or scissors
function getComputerChoice(){
    rpsChoice = ["rock","paper","scissors"];
    randomRpsIndex = Math.floor(Math.random()*rpsChoice.length);
    randomRpsChoice = rpsChoice[randomRpsIndex];
    return(randomRpsChoice);
};

// const computerSelection = getComputerChoice();


// player picks rock, paper or scissors
function getPlayerChoiceAndValidate(){
    let getPlayerChoice = prompt("write choice here!");

// check player choice if valid
    if(typeof getPlayerChoice === "string"){
        return func1(getPlayerChoice);
    }else if(getPlayerChoice === null){
        alert("NULL");
        return null;
    }

    function func1(choice){
        choice = choice.toUpperCase();
        choice = choice.toLowerCase();

        if(choice != "rock" && choice !="paper" && choice !="scissors"){
            alert("not a valid answer, please try again.");
        }
        return choice;
    }
}

// let playerSelection = getPlayerChoiceAndValidate();

// PLAY GAME!

function playRound(playerSelection, computerSelection){
    
    if(playerSelection === computerSelection){
        alert("Draw!");
    
    }else if(
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")){
            alert("You Won!");
            playerScore++;
    
    }else{
        alert("You Lose!");
        computerScore++;
    }

// Longer version with specific alert message(disabled)
    
    // }if(playerSelection === "rock" && computerSelection === "scissors"){
    //         alert("You Won! Rock beats Scissors");
    // }else if(playerSelection ==="rock" && computerSelection === "paper"){
    //         alert("You Lose! Paper beats Rock")
    
    // }if(playerSelection === "paper" && computerSelection === "rock"){
    //         alert("You Won! Paper beats Rock");
    // }else if(playerSelection === "paper" && computerSelection === "scissors"){
    //         alert("You lose! Scissors beats Paper");

    // }if(playerSelection === "scissors" && computerSelection === "paper"){
    //         alert("You Won! Scissors beats Paper");
    // }else if(playerSelection === "scissors" && computerSelection === "rock"){
    //         alert("You Lose! Rock beats Scissors");
    // }
    
}

// play 5 rounds of rock paper scissors

for (let i = 0; i < 5; i++) {
    let playerSelection = getPlayerChoiceAndValidate();
    let computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
}

// display final score

alert("Player Score: " + playerScore + "\nComputer Score: " + computerScore);


// console.log(computerSelection);
// console.log(playerSelection);
// console.log(playerScore);
// console.log(computerScore);