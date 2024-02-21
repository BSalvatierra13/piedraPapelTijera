


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




// function game() {
//     let playerPoint = 0;
//     let computerPoint = 0;
//     let points;
//     let playerSelection;
//     let ComputerChoice;
   

//     // Primera ronda

//     playerSelection = prompt("Chose = rock, paper or scissors");
//     ComputerChoice = getComputerChoice();

//     result = playRound(playerSelection, ComputerChoice)

//     if (result === "Computer wins :( ") {
//         computerPoint = computerPoint + 1;
        
//     }
//     else if (result === "You win!!") {

//         playerPoint = playerPoint + 1;
        
//     }
//     else {
       
//     }

//     points = "Player = " + playerPoint + "       " + "Computer = " + computerPoint;

//     console.log(result)
//     console.log(points)

//     // Segunda ronda

//     playerSelection = prompt("Chose = rock, paper or scissors");
//     ComputerChoice = getComputerChoice();

//     result = playRound(playerSelection, ComputerChoice)

//     if (result === "Computer wins :( ") {
//         computerPoint = computerPoint + 1;
        
//     }
//     else if (result === "You win!!") {

//         playerPoint = playerPoint + 1;
        
//     }
//     else {
       
//     }

//     points = "Player = " + playerPoint + "       " + "Computer = " + computerPoint;

//     console.log(result)
//     console.log(points)
    
//     // Tercera Ronda

//     playerSelection = prompt("Chose = rock, paper or scissors");
//     ComputerChoice = getComputerChoice();

//     result = playRound(playerSelection, ComputerChoice)

//     if (result === "Computer wins :( ") {
//         computerPoint = computerPoint + 1;
        
//     }
//     else if (result === "You win!!") {

//         playerPoint = playerPoint + 1;
        
//     }
//     else {
       
//     }

//     points = "Player = " + playerPoint + "       " + "Computer = " + computerPoint;

//     console.log(result)
//     console.log(points)

//     // Cuarta ronda

//     playerSelection = prompt("Chose = rock, paper or scissors");
//     ComputerChoice = getComputerChoice();

//     result = playRound(playerSelection, ComputerChoice)

//     if (result === "Computer wins :( ") {
//         computerPoint = computerPoint + 1;
        
//     }
//     else if (result === "You win!!") {

//         playerPoint = playerPoint + 1;
        
//     }
//     else {
       
//     }

//     points = "Player = " + playerPoint + "       " + "Computer = " + computerPoint;

//     console.log(result)
//     console.log(points)

//     // Quinta ronda

//     playerSelection = prompt("Chose = rock, paper or scissors");
//     ComputerChoice = getComputerChoice();

//     result = playRound(playerSelection, ComputerChoice)

//     if (result === "Computer wins :( ") {
//         computerPoint = computerPoint + 1;
        
//     }
//     else if (result === "You win!!") {

//         playerPoint = playerPoint + 1;
        
//     }
//     else {
       
//     }

//     points = "Player = " + playerPoint + "       " + "Computer = " + computerPoint;

//     console.log(result)
//     console.log(points)

// }

const botonTijera = document.querySelector(".boton-tijeras")
const botonPapel = document.querySelector(".boton-papel")
const botonPiedra = document.querySelector(".boton-piedra")

const anuncio = document.querySelector(".anuncio")
const scorePLayer = document.querySelector(".score-player")
const scoreComputer = document.querySelector(".score-computer")

let playerPoints = 0
let computerPoints = 0


function addPoints(string) {
    if (string === "Computer wins :( ") {
        anuncio.textContent = "Computer point"
        computerPoints = computerPoints + 1
    }
    else if (string === "You win!!") {
        anuncio.textContent = "Player point"
        playerPoints = playerPoints + 1
    }
    else {
        anuncio.textContent = "No points"
    }

    scorePLayer.textContent = "Player: " + playerPoints ;
    scoreComputer.textContent = "Computer: " + computerPoints;
}

function checkWin(scoreComputer, scorePLayer) {
  if (scoreComputer === 5 || scorePLayer ===5){
      
    if (scoreComputer === 5) {
        alert("Computer Wins")     
    }
    else {
        alert("Player wins")
    }

    playerPoints = 0
    computerPoints = 0
    scorePLayer.textContent = "Player: " + playerPoints ;
    scoreComputer.textContent = "Computer: " + computerPoints;
}
}


botonPapel.addEventListener("click", function () {
    let ComputerChoice = getComputerChoice() ;
    let result=playRound("PAPER", ComputerChoice); 
    addPoints(result);
    checkWin(computerPoints, playerPoints); })

botonTijera.addEventListener("click", function () {
    let ComputerChoice = getComputerChoice() ;
    let result=playRound("SCISSORS", ComputerChoice); 
    addPoints(result);
    checkWin(computerPoints, playerPoints);  })

botonPiedra.addEventListener("click", function () {
    let ComputerChoice = getComputerChoice() ;
    let result=playRound("ROCK", ComputerChoice); 
    addPoints(result);
    checkWin(computerPoints, playerPoints);  })
 

    




