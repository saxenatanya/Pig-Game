'use strict';


let showDice = document.getElementById("dice");
let rollDice = document.querySelector(".btn--roll");
let player1Score = document.getElementById("current--0").textContent;
let player2Score = document.getElementById("current--1").textContent;
let player1Section = document.getElementById("player--0");
let player2Section = document.getElementById("player--1");
let holdDice = document.querySelector(".btn--hold");
let newGame= document.querySelector(".btn--new");
let activePlayer = 0; // player 1
let currentScore = 0;
let scores = [0,0];
let playing = true;
// to roll the dice 
rollDice.addEventListener('click',()=>{
    showDice.classList.remove("hidden");
    let randomDiceNummber = Math.ceil(Math.random()*6);
let diceImage= "dice-"+randomDiceNummber+".png";
    // console.log(diceImage);
    console.log(randomDiceNummber);
    showDice.src = diceImage;
    if(randomDiceNummber !== 1 ){
        currentScore +=  randomDiceNummber;
        document.getElementById(`current--${activePlayer}`).textContent =currentScore;
    }else{
            switchPlayer();
    }
});

const switchPlayer = ()=>{
    document.getElementById(`current--${activePlayer}`).textContent =0;
    currentScore =0;
        activePlayer = activePlayer === 0 ? 1: 0;
  player1Section.classList.toggle("player--active");
        player2Section.classList.toggle("player--active");
};

holdDice.addEventListener('click',()=>{
    if(playing){
        scores[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).textContent =
        scores[activePlayer];
        if(scores[activePlayer] >= 100){
            playing= false;
            showDice.classList.add("hidden");
            document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
        }else{
            switchPlayer();
        }
    }
});

newGame.addEventListener('click',()=>{
window.location.reload();
});