var words = ["car","computer","geek","radio","phone","building","miami"];
var guess = [];
var attempts = 0;

var random = Math.floor((Math.random()*(words.length-1))); 
var word = words[random];

for(var i = 0; i < word.length; i++){
    guess[i] = " _ ";
}

var counter = 0;

function checkChar(){
    
    var guessInput = document.getElementById("guessedChar"); 
    var character = guessInput.value.toLowerCase();

    for(var k = 0; k < word.length; k++){
        if (word.charAt(k) == character.toLowerCase() && guess[k] == " _ " && attempts != 7){
            guess[k] = character;
            console.log(guess);
            counter++;
            console.log("counter: " + counter);
        } else if (!word.includes(character) && attempts < 7){
            attempts++;
            console.log("attempts: " + attempts);
            break;
        }
    }
    
    if (counter == word.length){
        alert("Thank you for playing, YOU WON!");
    }
    
    if (attempts == 7 && counter != word.length){
        alert("Thank you for playing, YOU ARE DEAD!");
    }
}
console.log(guess);
console.log("counter: " + counter);
console.log("attempts: " + attempts);

function refreshScreen(){
	var screenLetters = document.getElementById("screenLetters");
	screenLetters.innerHTML = guess.toString().replace(/,/g , " ");
}

function init(){
	refreshScreen();
}

window.onload = init;