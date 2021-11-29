//Variables firstCard and secondCard 

//Set their values to a random number between 2-11

//Create a variable, sum and set it to the sum of the two cards. 

let firstCard = 10;
let secondCard = 1; 
let sum = firstCard + secondCard;

let hasBlackJack = false;
let isAlive = true;

let message = "";

if (sum <= 20) {
    message = "do you want to draw a new card?";
    
}else if (sum === 21) {
    message = "You've got a blackjack!";
    hasBlackjack = true;
}else {
    message = "You're out of the game! "; 
    isAlive = false;
};

console.log(message);