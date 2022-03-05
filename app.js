const computerChoiceDisplay = document.getElementById('computer-choice')

const userchoiceDisplay = document.getElementById('user-choice')

const resultDisplay = document.getElementById('result')

const possiblechoices = document.querySelectorAll('button')

let userchoice
let computerChoice
let result

possiblechoices.forEach(possiblechoice => possiblechoice.addEventListener('click',(e) => {
  userchoice = e.target.id;
  userchoiceDisplay.innerHTML  = userchoice
  generateComputerChoice()
  getResult()
}))


function generateComputerChoice(){
    const randomNumber = Math.floor(Math.random() * 3) + 1 

    if(randomNumber === 1){
        computerChoice = 'rock'
    }

    if(randomNumber === 2){
        computerChoice = 'paper'
    }

    if(randomNumber === 3){
        computerChoice = 'scissor'
    }   

    computerChoiceDisplay.innerHTML = computerChoice


}

function getResult(){
    if(userchoice===computerChoice){
        result = "It's a draw"
    }
    if(userchoice==='rock' && computerChoice==='paper'){
        result = "You Lose"
    }
    if(userchoice==='paper' && computerChoice==='scissor'){
        result = "You Lose"
    }
    if(userchoice==='scissor' && computerChoice==='rock'){
        result = "You Lose"
    }
    if(userchoice==='rock' && computerChoice==='scissor'){
        result = "You Win"
    }
    if(userchoice==='paper' && computerChoice==='rock'){
        result = "You Win"
    }
    if(userchoice==='scissor' && computerChoice==='paper'){
        result = "You Win"
    }
    resultDisplay.innerHTML = result
}
