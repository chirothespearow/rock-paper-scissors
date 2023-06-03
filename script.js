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

function playRound(playerChoice,computerChoice){
    if(playerChoice === computerChoice){
        return 'Draw!';
    }
    else if(playerChoice === 'rock'){
        if (computerChoice === 'paper'){
            return 'You lose :(';
        }
        return 'You win!'
    }
    else if(playerChoice === 'paper'){
        if (computerChoice === 'scissors'){
            return 'You lose :(';
        }
        return 'You win!'
    }
    else if(playerChoice === 'scissors'){
        if (computerChoice === 'rock'){
            return 'You lose :(';
        }
        return 'You win!'
    }
}

function game(){
    for(i=0;i<5;i++){
        while(true){
            var playerChoice = prompt("Choose your weapon: ");
            playerChoice = playerChoice.toLowerCase();
            if(playerChoice === 'scissors' || playerChoice === 'paper' || playerChoice === 'rock'){
                break;
            }
            alert("That is not a valid weapon!");
        }

        console.log(playerChoice);
        alert(playRound(playerChoice,getComputerChoice())); 
    }
    alert("The game has finished.");
}

game();
