function buttonClick(userChoice){
var choices = ["rock", "paper", "scissors"];
var computerChoice = choices[Math.floor(Math.random()*choices.length)];
var userWins = ["rockscissors", "paperrock", "scissorspaper"];}

function evaluate(){
var msg = "Computer Wins!";
if (userChoice==computerChoice) {
msg ="tie";
} else {
var outCome = userChoice + computerChoice;
//each is a loop  .xxx is a method
$.each(userWins, function(index, value){
if (outCome==value){msg = "You win!";}});
}
return msg;
//returning value (answer), same as below
}
var result = evaluate ();
alert(result);