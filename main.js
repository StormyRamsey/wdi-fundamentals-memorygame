console.log("JS file is connected to HTML! Woo!")

var cards = ['queen', 'king', 'queen', 'king'];
var cardsInPlay = [];

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

for (var i =; i < cards.length; i++{
	var cardsElement = document.createElement('div');
cardsElement.className = "card";
gameBoard.appendChild(cardsElement);

cardElement.setAttribute('data-card', cards [i]);

}
}

createCards();