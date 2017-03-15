console.log("JS file is connected to HTML! Woo!")

var cardOne = "king";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "queen";

/* if (cardTwo === cardFour) {
	alert ("You found a match!" );
} else if (cardOne === cardThree) {
	alert ("You found a match!");
} else if (cardOne === cardTwo) {
	alert ("Sorry try again.");
} else if (cardThree === cardFour) {
	alert ("Sorry try again.");
} */

var gameBoard = document.getElementByID ('game-board');

var createCards = function () {

for (i = 0; i<4 i++) {
	var cardsElement = document.createElement('div');
cardsElement.className = "card";
gameBoard.appendChild(cardsElement);

}
}

createCards();