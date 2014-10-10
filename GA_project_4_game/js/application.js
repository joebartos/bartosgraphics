function buttonClick(ButtonChoice){
	var rockButton = document.getElementById('rockClick');
	var paperButton = document.getElementById('paperClick');
	var scissorsButton = document.getElementById('scissorsClick');
	var userchoice="rock";

	if (ButtonChoice==paperButton) {userchoice=="paper";}
	if (ButtonChoice==scissorsButton) {userchoice=="scissors";}

	var computerChoice = choices[Math.random()*choices.length];}

	var userWins = ["rockscissors", "paperrock", "scissorspaper"];

	var choices = ["rock", "paper", "scissors"];}


function evaluate(){
var msg = "Computer Wins!";
if (userChoice==computerChoice) {
msg ="tie";
} else {

var outCome = userChoice + computerChoice;



//each is a loop  .xxx is a method
$.each(userWins, function(index, value){
if (outCome==value){
msg = "You win!";
}
});
}
return msg;
//returning value (answer), same as below
}
var result = evaluate ();
alert(result);
