

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
var cardsInPlay = [];

var wins = 0;
var win = function(){
document.getElementById('wins').innerHTML = "WINS " + wins;
};

var plays = 0;
var play = function() {
document.getElementById('plays').innerHTML = "PLAYS " + plays;
};
/*var checkForMatch = function() {
	cardElement.setAttribute(cards[cardId].cardImage);
	if (cardsInPlay.length === 2){
	if (cardsInPlay[0] === cardsInPlay[1]) {
	alert("You found a Match!");
} else {
	alert("Sorry, try again.");
}
}

else {
	console.log("Flip another card!");
}
};*/

var flipCard = function() {
	
	cardId = this.getAttribute('data-id');
    console.log("User flipped " + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
    this.setAttribute('src',cards[cardId].cardImage);
	if (cardsInPlay.length === 2){
		plays += 1;
		play();
	if (cardsInPlay[0] === cardsInPlay[1]) {
	alert("You found a Match!");
    wins += 1;
win();
} else {
	alert("Sorry, try again.");

}

} else {
	console.log("Flip another card!");
}
   
};

var reset = function() {
		cardsInPlay.splice(0,cardsInPlay.length);
		document.getElementById("game-board").innerHTML = "";
		console.log("RESETING GAME");
		createBoard();
		alert("Board Reset!");
    //location.reload(true);
};


var createBoard = function(){
	for (var i = 0; i<cards.length; i++){
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', "images/back.png");
		cardElement.setAttribute('data-id', [i]);
		cardElement.addEventListener('click', flipCard);
		var gameBoard = document.getElementById('game-board').appendChild(cardElement);
}
};



createBoard();




  /*if (cardsInPlay.length === 2){
   if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	} else {
		alert("Sorry, try again!");
	}
  }
   if (cardsInPlay.length === 1) {
		console.log("Flip another card!");
	}*/







/*console.log ("User flipped " + cardOne);
console.log ("User flipped " + cardTwo); 
*/