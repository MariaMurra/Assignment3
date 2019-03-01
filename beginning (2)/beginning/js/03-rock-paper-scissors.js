/*eslint-env browser*/
//USER'S CHOICE
window.document.write("<h1> Rock, Paper Scissors.</h1>");
var usersChoice = window.prompt("Hi there! what's your pick?\n rock, paper or scissors");

//COMPUTER'S CHOICE
var compChoice = Math.random();

if (compChoice <= 0.33) {
    compChoice = "rock";
} else if (compChoice > 0.33 || compChoice < 0.66) {
    compChoice = "paper";
} else if (compChoice > 0.66) {
    compChoice = "scissors";
}


//WHO WINS

//Game Tied
if (compChoice === usersChoice) {
    window.document.write("Computer\'s choice was " + compChoice + " and your\'s was the same, \n <strong> The game is tied.</strong>");
}
//Computer choses Rock    
    else if (compChoice === "rock" && usersChoice === "paper") {
    window.document.write("Computer\'s choice was rock and your\'s was paper, \n <strong>You win!/strong>");
} else if (compChoice === "rock" && usersChoice === "scissors") {
    window.document.write("Computer\'s choice was rock and your\'s was scissors, \n <strong>Computer wins</strong>");
}
//Computer choses Paper
    else if (compChoice === "paper" && usersChoice === "rock") {
    window.document.write("Computer\'s choice was paper and your\'s was rock, \n <strong>Computer wins</strong>");
} else if (compChoice === "paper" && usersChoice === "scissors") {
    window.document.write("Computer\'s choice was paper and your\'s was scissors, \n <strong>You Win!</strong>");
}
//Computer choses scissors
    else if (compChoice === "scissors" && usersChoice === "paper") {
    window.document.write("Computer\'s choice was scissors and your\'s was paper, \n <strong>Computer wins</strong>");
} else if (compChoice === "scissors" && usersChoice === "rock") {
    window.document.write("Computer\'s choice was rock and your\'s was paper, \n <strong>You Win!</strong>");
} else {
    window.document.write("There was an error");
}