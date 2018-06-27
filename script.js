var words = ["CAR","COMPUTER","GEEK","RADIO","PHONE","BUILDING","MIAMI"];
var guess = [];
var attempts = 0;

var random = Math.floor((Math.random()*(words.length))); 
var word = words[random];

for(var i = 0; i < word.length; i++){
    guess[i] = " _ ";
}

var counter = 0;

function checkChar(){
    
    var hangmanImg = document.getElementById("hangman");
    var wrong = document.getElementById("wrong");
    var guessInput = document.getElementById("guessedChar"); 
    var character = guessInput.value.toUpperCase();

    for(var k = 0; k < word.length; k++){
        if (word.charAt(k) == character && guess[k] == " _ " && attempts != 6){
            guess[k] = character;
            console.log(guess);
            counter++;
        	var screenLetters = document.getElementById("letters");
            screenLetters.innerHTML=""; 
            refreshScreen();
            console.log("counter: " + counter);
        } else if (!word.includes(character) && counter != word.length && attempts != 6){
            attempts++;
            hangmanImg.setAttribute("src","./img/hangman" + attempts + ".png");
            wrong.innerHTML = "Wrong Letters: " + attempts;
            console.log("attempts: " + attempts);
            break;
        }
    }
    
    guessInput.value="";
    
    if (counter == word.length){
        alert("Thank you for playing, YOU WON!");
    }
    
    if (attempts == 6 && counter != word.length){
        alert("Thank you for playing, YOU ARE DEAD!");
    }
}
console.log(guess);
console.log("counter: " + counter);
console.log("attempts: " + attempts);

function refreshScreen(){
	var letters = document.getElementById("letters");
	letters.innerHTML = guess.toString().replace(/,/g , " ");
}

function init(){
	refreshScreen();
}

window.onload = init;