let userPlay = () => {
    let random = ['rock', 'paper', 'scissors'] 
  return random[Math.floor(Math.random() * 3)]
}
let computerPlay = () => { 
    let random = ['rock', 'paper', 'scissors'] 
    return random[Math.floor(Math.random() * 3)]

} 
let playRound = (playerSection, computerSelection) => { 
  if (playerSection === "paper" && computerSelection === "rock") {
      return "User wins"
    } 
   else if (playerSection === "rock" && computerSelection === "paper") {
      return "Computer wins"
    } 
    else if (playerSection === "paper" && computerSelection === "scissors") {
        return "Computer wins"
    } 
    else if (playerSection === "scissors" && computerSelection === "paper") {
        return "User wins"
    } else if (playerSection === "scissors" && computerSelection === "rock") {
        return "Computer wins"
    } 
    else if (playerSection === "rock" && computerSelection === "scissors") {
        return "User wins"
     
    } else {
        return "Draw"
    }
 
} 
let userChoice = userPlay() 
let compChoice = computerPlay() 
let result = playRound(userChoice, compChoice) 
console.log("user....", userChoice) 
console.log("computer.....", compChoice) 
console.log("result is ....", result)