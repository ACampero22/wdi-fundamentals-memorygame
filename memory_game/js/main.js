const cards = ["queen", "queen", "king", "king"];
const cardsInPlay =[];
function checkForMatch(){
	if (cardsInPlay[0] === cardsInPlay[1]){
		console.log("You Found a match");
	}else{
		console.log("Sorry, try again")
	}
}
function flipCard(cardId){
	

	
	//checkForMatch();
	console.log("User flipped " + cards[cardId]);
	cardsInPlay.push(cards[cardId]);

		if(cardsInPlay.length === 2){
		checkForMatch();
	/*if (cardsInPlay[0] === cardsInPlay[1]){
		alert("you found a match!");
	}
	else{
		alert("sorry Try again");*/


	}
	

};

flipCard(0);
flipCard(2);
//checkForMatch();




	

