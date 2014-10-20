var userWins = ["rockscissors", "paperrock", "scissorspaper"];

function buttonClick(userChoice)
{
	var choices = ["rock", "paper", "scissors"];
	var computerChoice = choices[Math.floor(Math.random()*choices.length)];
	var result = evaluate(userChoice, computerChoice);
	alert(result)
}

function evaluate(userChoice, computerChoice) {
	var msg = "Computer Wins!";

	if (userChoice==computerChoice) {
		msg ="Tie!";
	} else {
		var outCome = userChoice + computerChoice;

		$.each(userWins, function(index, value){
			if (outCome==value){
				msg = "You win!";
			}	   	
		});
	}
//each is a loop 
return msg;
}
