

function getComputerChoice(){
    rpsChoice = ["Rock","Paper","Scissors"];
    randomRpsIndex = Math.floor(Math.random()*rpsChoice.length);
    randomRpsChoice = rpsChoice[randomRpsIndex];
    return(randomRpsChoice);
};

console.log(getComputerChoice());