
var wordsArray = [
	["T","H","E"],
	["A","L","W","A","Y","S"]
	];

var wordInPlay = [];
	
function getRandomWord(){
	var random = Math.floor(Math.random()*2) + 1;
	wordInPlay = wordsArray[random];
	console.log(wordInPlay);
}

getRandomWord();


function showScreen(){
	var screenBars = document.getElementById("screenRefresh");
	
	for(var i=0; i<wordInPlay.length; i++){
		console.log(i);
	}
	screenBars.innerHTML;
}

showScreen();