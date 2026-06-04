/*
1. randomly pick a number 1-3 for rock, paper, or scissors
2. set the computer's choice to be either rock paper or scissors based on the random number
3. ask for user input for either rock, paper or scissors (ask user for actual choice, not 1-3)
4. then compare the choices to determine the winner (paper beats rock, rock beats scissors, scissors beats paper)
5. decide the winner of the game based what the computer and the user chose
*/


function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function getHumanChoice() {
    const userInput = prompt("Please enter rock, paper, or scissors:");
    return userInput.toLowerCase();
}

var humanScore = 0;
var computerScore = 0;

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice) {
        return "It's a tie!";
    }


}
    
    



   