var userName = window.prompt("please enter your name");
console.log(userName);
if (userName.length == 0){
	userName = "Player";
}
var uName = document.getElementsByClassName("name");
for (var i = 0; i < uName.length; i++) {
	uName[i].innerHTML = userName;
}

var playerScore = 0;
var computerScore = 0;
var ties = 0;
var timesPlayed = 0;
var rockWins = 0;
var paperWins = 0;
var scissorsWins = 0;


function play() {
	console.log(document.querySelector('input[name="weapon"]:checked'));
	//check if playerChoice is empty
	if (document.querySelector('input[name="weapon"]:checked') == null) {
		alert("Please select a choice");
		return;
	}
	//get playerChoice from radio button
	var playerChoice = document.querySelector('input[name="weapon"]:checked').value;
	timesPlayed++;
	var computerChoice = Math.random();
	if (computerChoice < 0.34) {
		computerChoice = "rock";
	}
	else if (computerChoice <= 0.67) {
		computerChoice = "paper";
	}
	else {
		computerChoice = "scissors";
	}
	console.log("Computer: " + computerChoice);
	document.querySelectorAll('.computerChoice').forEach(el=>{
		el.innerHTML = computerChoice;
		//document.getElementById('computerChoice').innerHTML = computerChoice;
	})
	console.log("Player: " + playerChoice);
	document.getElementById('playerChoice').innerHTML = playerChoice;
	//compare choices
	var compare = function (choice1, choice2) {
		if (choice1 === choice2) {
			ties++;
			return "tie";
		}
		else if (choice1 === "rock") {
			if (choice2 === "scissors") {
				playerScore++;
				rockWins++;
				return "user wins";
			}
			else {
				computerScore++;
				return "computer wins";
			}
		}
		else if (choice1 === "paper") {
			if (choice2 === "rock") {
				playerScore++;
				paperWins++;
				return "user wins";
			}
			else {
				computerScore++;
				return "computer wins";
			}
		}
		else if (choice1 === "scissors") {
			if (choice2 === "rock") {
				computerScore++;
				return "computer wins";
			}
			else {
				playerScore++;
				scissorsWins++;
				return "user wins";
			}
		}
	}
	var result = compare(playerChoice, computerChoice);
	console.log(playerScore);
	console.log(computerScore);
	console.log(ties);
	document.getElementById('result').innerHTML = result;
	document.getElementById('playerScore').innerHTML = playerScore;
	document.getElementById('computerScore').innerHTML = computerScore;
	document.getElementById('ties').innerHTML = ties;
	document.getElementById('timesPlayed').innerHTML = timesPlayed;

	//change color of resultColor to green if user wins, red if computer wins, and yellow if tie
	document.getElementById('resultColor').style.backgroundColor = result == "user wins" ? "green" : result == "computer wins" ? "red" : "yellow";
	document.getElementById('resultColor').style.color = result == "user wins" ? "white" : result == "computer wins" ? "white" : "black";


	//keep track of how many times each weapon was used
	if (playerChoice == "rock") {
		document.getElementById('rockUsed').innerHTML = parseInt(document.getElementById('rockUsed').innerHTML) + 1;
	}
	else if (playerChoice == "paper") {
		document.getElementById('paperUsed').innerHTML = parseInt(document.getElementById('paperUsed').innerHTML) + 1;
	}
	else if (playerChoice == "scissors") {
		document.getElementById('scissorsUsed').innerHTML = parseInt(document.getElementById('scissorsUsed').innerHTML) + 1;
	}
	//display win percentage for each weapon every time its used
	
	document.getElementById('rockWin').innerHTML = Math.round((parseInt(rockWins) / timesPlayed) * 100) + "%";
	document.getElementById('paperWin').innerHTML = Math.round((parseInt(paperWins) / timesPlayed) * 100) + "%";
	document.getElementById('scissorsWin').innerHTML = Math.round((parseInt(scissorsWins) / timesPlayed) * 100) + "%";


}