
card1 = null;
card2 = null;

function clicked(card){
	
	if(card1==null){
		card.className = "show";
		card1 = card;
	}
	else if(card2==null){
		card.className = "show";
		card2 = card;
		setTimeout("checkMatch();", 1000);
	}
	
}
function checkMatch(){
	if(card1.src==card2.src){
		//alert("Match");
		//reset
			card1 =null;
	        card2 =null;
	}
	else{
		card1.className="front-face";
		card2.className="front-face";

		card1 =null;
	    card2 =null;
	}
}


