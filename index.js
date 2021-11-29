//Variables firstCard and secondCard 

//Set their values to a random number between 2-11

//Create a variable, sum and set it to the sum of the two cards. 

let firstCard = 10;
let secondCard = 11; 

let sum = firstCard + secondCard;

if (sum <= 20) {
    console.log("do you want to draw a new card?")
}else if (sum === 21) {
    console.log("You've got a blackjack");
}else {
    console.log("You're out of the game! "); 
};

