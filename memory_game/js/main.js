

var cards = ["queen","queen","king","king"];
var cardsInPlay = []
var checkForMatch = function() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
	console.log("You found a Match!");
} else {
	console.log("Sorry, try again.");
}
}

var flipCard = function(cardId) {
    console.log("User flipped " + cards[cardId]);
	cardsInPlay.push(cards[cardId]);

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
}

flipCard(cardId);



/*console.log ("User flipped " + cardOne);
console.log ("User flipped " + cardTwo); 
*/