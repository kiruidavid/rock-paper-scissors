let playerScore = 0 
let compScore = 0

let rock = document.getElementById('rock') 
let paper = document.getElementById('paper') 
let scissors = document.getElementById('scissors') 
let resetBtn = document.getElementById('resetBtn')


let computerPlay = () => { 
    let choices = ['rock', 'paper', 'scissors'] 
    return choices[Math.floor(Math.random() * 3)]

} 


let playRound = (playerSection, computerSelection) => { 
  console.log("user selection...", playerSection) 
  console.log("comp selection....", computerSelection)
  if (playerSection === "paper" && computerSelection === "rock") { 
      playerScore++
      document.getElementById('result').innerHTML = "Player wins, paper beats rock"
    } 
   else if (playerSection === "rock" && computerSelection === "paper") { 
      compScore++ 
      document.getElementById('result').innerHTML = "Computer wins, paper beats rock "
      
    } 
    else if (playerSection === "paper" && computerSelection === "scissors") { 
        compScore++ 
        document.getElementById('result').innerHTML = "Computer wins, scissors beats paper"
       
    } 
    else if (playerSection === "scissors" && computerSelection === "paper") { 
        playerScore++
        document.getElementById('result').innerHTML = "Player wins, scissors beats paper"
        return "User wins"
    } else if (playerSection === "scissors" && computerSelection === "rock") {
        compScore++ 
        document.getElementById('result').innerHTML = "Computer wins, rock beats scissors"
    } 
    else if (playerSection === "rock" && computerSelection === "scissors") {
        playerScore++
        document.getElementById('result').innerHTML = "Player wins, rock beats scissors"
     
    } else {
        document.getElementById('result').innerHTML = "Draw"
    }
 
} 
function game(playerChoice){
    let player = playerChoice 
    let computer = computerPlay() 
    document.getElementById("comp-choice").innerHTML = computer 
    document.getElementById("comp-choice").style.color = "yellow"

    playRound(player, computer) 
    document.getElementById("comp-score").innerHTML = compScore 
    document.getElementById("user-score").innerHTML = playerScore

    if (playerScore == 5){ 
    
        document.getElementById('round-five-result').innerHTML = "YOU WIN !! click RESET to reset  " 
        

    } else if(compScore == 5){ 
        document.getElementById('round-five-result').innerHTML = "COMPUTER WIN click RESET to reset !!"
 
    }
} 
rock.addEventListener('click', () => {
    game("rock")
}) 
paper.addEventListener('click', () => {
    game("paper")
}) 
scissors.addEventListener('click', () => {
    game("scissors")
}) 
resetBtn.addEventListener('click', () => {
    location.reload()
})