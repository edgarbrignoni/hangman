var words = ["car","computer","geek","radio","phone","building","miami"];
var guess = [];
var attempts = 0;

var random = Math.floor((Math.random()*(words.length-1))); 
var word = words[random];

for(var i = 0; i < word.length; i++){
    guess[i] = " _ ";
}

var counter = 0;

function letterMatches(){
    
var guessInput = document.getElementById("guessedChar"); 
var character = guessInput.value.toLowerCase();

while (counter!=word.length && attempts != 7){
    // var character = prompt("Enter a character: ");
    for(var k = 0; k < word.length; k++){
        if (word.charAt(k) == character.toLowerCase() && guess[k] == " _ "){
            guess[k] = character;
            console.log(guess);
            counter++;
            console.log("counter: " + counter);
        } else if (!word.includes(character)){
            attempts++;
            console.log("attempts: " + attempts);
            break;
        }
    }
}
console.log(guess);
console.log(counter);
console.log(attempts);
}
