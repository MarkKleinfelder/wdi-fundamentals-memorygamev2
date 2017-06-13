

var cards = [
{
	rank : "Queen",
	suit : "Hearts",
    cardImage : "images/queen-of-hearts.png"
},
{
	rank : "Queen",
	suit : "Diamonds",
	cardImage : "images/queen-of-diamonds.png"
},
{
	rank : "King",
	suit : "Hearts",
	cardImage : "images/king-of-hearts.png"
},
{
	rank : "King",
	suit : "Diamonds",
	cardImage : "images/king-of-diamonds.png"
}

];
var cardsInPlay = []
var checkForMatch = function() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
	console.log("You found a Match!");
} else {
	console.log("Sorry, try again.");
}
}

var flipCard = function(cardId) {
    console.log("User flipped " + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);

if (cardsInPlay.length === 2){
    if (cardsInPlay.length < 2) {
		console.log("Flip another card!");
	}
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	} else {
		alert("Sorry, try again!");
	}
  }
};





/*console.log ("User flipped " + cardOne);
console.log ("User flipped " + cardTwo); 
*/