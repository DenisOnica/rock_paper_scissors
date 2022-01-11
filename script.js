function random(){
    return Math.floor(Math.random() * 3);
}

function computerChoice(){
    switch(random()){
        case 0: return 'rock';
        break;
        case 1: return 'paper';
        break;
        case 2: return 'scissors'
        break;
    }
}

function result(humanChoice, computerChoice){
    let decision = '';
    if(humanChoice == computerChoice){
        decision = 'TIE';
    } 
    if((humanChoice == 'rock' && computerChoice == 'paper')
    || (humanChoice == 'paper' && computerChoice == 'scissors')
    || (humanChoice == 'scissors' && computerChoice == 'rock')){
        decision = 'YOU LOSE!'
        scores.computerScore++;
    }
    if((humanChoice == 'rock' && computerChoice == 'scissors')
    ||(humanChoice == 'paper' && computerChoice == 'rock')
    ||(humanChoice == 'scissors' && computerChoice == 'paper')){
        decision = 'YOU WIN!';
        scores.humanScore++;
    }  
    return decision;
}

function isGameOver(){
    return scores.humanScore === 5 || scores.computerScore === 5;
}

function showFinalMessage(){
    return scores.humanScore > scores.computerScore
    ? (score.innerHTML = 'You won!')
    : (score.innerHTML = 'You lost!')
}

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scrissor = document.querySelector('#scrissors');
const score = document.querySelector('#score');
const playerScore = document.querySelector('#playerScore');
const machineScore = document.querySelector('#computerScore');
const player = document.querySelector('#player');
const computer = document.querySelector('#computer');


let humanChoice = '';
const scores = {
    humanScore : 0,
    computerScore : 0
}

function finalResult(humanChoice){
    if(isGameOver()){
        showFinalMessage();
        return 0;
    } 
    let computerChoice1 =  computerChoice();
    let finalResult = result(humanChoice,computerChoice1);
    score.innerHTML = finalResult;
    
    const test = `fa-hand-${humanChoice}`;
    player.classList = `far ${test} fa-5x`;
    player.classList.add('btn');
    player.style.display = 'flex';

    const test2 = `fa-hand-${computerChoice1}`;
    computer.classList = `far ${test2} fa-5x`;
    computer.classList.add('btn');
    computer.style.display = 'flex'

    playerScore.textContent = `Player : ${scores.humanScore}`;
    machineScore.textContent = `Computer : ${scores.computerScore}`;
    if(isGameOver()){
        showFinalMessage();
        return 0;
    } 
}


rock.addEventListener('click', () => {
    finalResult('rock');
});

paper.addEventListener('click', () => {
    finalResult('paper');
});

scrissor.addEventListener('click', () => {
    finalResult('scissors');
});

