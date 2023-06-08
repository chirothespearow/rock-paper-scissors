function getComputerChoice(){
    let choice = Math.floor(Math.random()*3);
    switch(choice){
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}

function playRound(e){
    if (game){
        let playerChoice = this.classList.value;
        let computerChoice = getComputerChoice();
        if(playerChoice === computerChoice){
            div.textContent = 'Draw!';
        }
        else if(playerChoice === 'rock'){
            if (computerChoice === 'paper'){
                div.textContent = 'You lose :(';
                cScore++;
            }
            else{
                div.textContent = 'You win!';
                pScore++;
            }
        }
        else if(playerChoice === 'paper'){
            if (computerChoice === 'scissors'){
                div.textContent = 'You lose :(';
                cScore++;
            }
            else{
                div.textContent = 'You win!';
                pScore++;
            }
        }
        else if(playerChoice === 'scissors'){
            if (computerChoice === 'rock'){
                div.textContent = 'You lose :(';
                cScore++;
            }
            else{
                div.textContent = 'You win!';
                pScore++;
            }
        }
    }   
    playerScore.textContent = `Player Score : ${pScore}`;
    computerScore.textContent = `Computer Score : ${cScore}`;

    if(pScore === 5 || cScore === 5){
        game = false;
        if (pScore > cScore){
            result.textContent = "Player wins!";
        }
        else{
            result.textContent = "Computer wins!";
        }
    }
}

var pScore = 0;
var cScore = 0;
var game = true;
const buttons = document.querySelectorAll('button');
buttons.forEach(btn => btn.addEventListener('click',(playRound)));
const container = document.querySelector('body');
const div = document.createElement('div');
container.appendChild(div);

const playerScore = document.createElement('div');
playerScore.textContent = `Player Score : ${pScore}`;
container.appendChild(playerScore); 

const computerScore = document.createElement('div');
computerScore.textContent = `Computer Score : ${cScore}`;
container.appendChild(computerScore); 

const result = document.createElement('div');
container.appendChild(result);
// while(pScore<5 && cScore<5){

// }

// game=false;