'use strict';

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number!'
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 15;
document.querySelector('.score').textContent = 10

document.querySelector('.guess').value= '10' //input için value kullanılır
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
}
const showScore = function(score){
    document.querySelector('.score').textContent = score;
}

document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    if(!guess){
        displayMessage('Enter a Number!');
    
    } else if(guess === secretNumber){
        document.querySelector('body').style.backgroundColor =  'green'
        displayMessage('Correct Number! YOU WON')
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = secretNumber;
        if(score > highScore){
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }

    } else if(guess !== secretNumber) {
        if(score > 1){
            displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!')
            score--;
            showScore(score) ;
    
        
        } else {
            displayMessage('You lost :(');
            score--;
            showScore(0);
        }

    }
} );

document.querySelector('.again').addEventListener('click', function(){
    document.querySelector('body').style.backgroundColor =  'black';
    score = 20;
    displayMessage('Start guessing...')
    secretNumber = Math.trunc(Math.random() * 20) + 1
    showScore(score);
    document.querySelector('.number').textContent = '?'
    document.querySelector('.guess').value = '';
});