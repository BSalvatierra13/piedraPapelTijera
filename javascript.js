function getComputerChoice () {
    let ComputerChoice = Math.random()

    if (ComputerChoice < 0.33) {
        ComputerChoice = "ROCK";

    }
    else if (ComputerChoice < 0.66) {
        ComputerChoice = "PAPER"
    }
    else {
        ComputerChoice = "SCISSORS"
    }

    return ComputerChoice
}




function playRound (playerSelection, ComputerChoice) {

  if (typeof playerSelection === "string") {
        playerSelection = playerSelection.toUpperCase() ;

        if ( (playerSelection === "ROCK" && ComputerChoice === "PAPER") || (playerSelection === "PAPER" && ComputerChoice === "SCISSORS") || (playerSelection === "SCISSORS" && ComputerChoice === "ROCK")) {
            return ("Computer wins :( ")
        }
        else if ((playerSelection === "PAPER" && ComputerChoice === "ROCK") || (playerSelection === "SCISSORS" && ComputerChoice === "PAPER") || (playerSelection === "ROCK" && ComputerChoice === "SCISSORS")) {
            return ("You win!!")
        }
        else {return ("It is a drow")}  
    }    
  else {
    console.log ("Not string")
    }     
}




function game() {
    let playerPoint = 0;
    let computerPoint = 0;
    let points;
    let playerSelection;
    let ComputerChoice;
   

    // Primera ronda

    playerSelection = prompt("Chose = rock, paper or scissors");
    ComputerChoice = getComputerChoice();

    result = playRound(playerSelection, ComputerChoice)

    if (result === "Computer wins :( ") {
        computerPoint = computerPoint + 1;
        
    }
    else if (result === "You win!!") {

        playerPoint = playerPoint + 1;
        
    }
    else {
       
    }

    points = "Player = " + playerPoint + "       " + "Computer = " + computerPoint;

    console.log(result)
    console.log(points)

    // Segunda ronda

    playerSelection = prompt("Chose = rock, paper or scissors");
    ComputerChoice = getComputerChoice();

    result = playRound(playerSelection, ComputerChoice)

    if (result === "Computer wins :( ") {
        computerPoint = computerPoint + 1;
        
    }
    else if (result === "You win!!") {

        playerPoint = playerPoint + 1;
        
    }
    else {
       
    }

    points = "Player = " + playerPoint + "       " + "Computer = " + computerPoint;

    console.log(result)
    console.log(points)
    
    // Tercera Ronda

    playerSelection = prompt("Chose = rock, paper or scissors");
    ComputerChoice = getComputerChoice();

    result = playRound(playerSelection, ComputerChoice)

    if (result === "Computer wins :( ") {
        computerPoint = computerPoint + 1;
        
    }
    else if (result === "You win!!") {

        playerPoint = playerPoint + 1;
        
    }
    else {
       
    }

    points = "Player = " + playerPoint + "       " + "Computer = " + computerPoint;

    console.log(result)
    console.log(points)

    // Cuarta ronda

    playerSelection = prompt("Chose = rock, paper or scissors");
    ComputerChoice = getComputerChoice();

    result = playRound(playerSelection, ComputerChoice)

    if (result === "Computer wins :( ") {
        computerPoint = computerPoint + 1;
        
    }
    else if (result === "You win!!") {

        playerPoint = playerPoint + 1;
        
    }
    else {
       
    }

    points = "Player = " + playerPoint + "       " + "Computer = " + computerPoint;

    console.log(result)
    console.log(points)

    // Quinta ronda

    playerSelection = prompt("Chose = rock, paper or scissors");
    ComputerChoice = getComputerChoice();

    result = playRound(playerSelection, ComputerChoice)

    if (result === "Computer wins :( ") {
        computerPoint = computerPoint + 1;
        
    }
    else if (result === "You win!!") {

        playerPoint = playerPoint + 1;
        
    }
    else {
       
    }

    points = "Player = " + playerPoint + "       " + "Computer = " + computerPoint;

    console.log(result)
    console.log(points)

}

game()


