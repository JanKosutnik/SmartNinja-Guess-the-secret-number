let resultInfo = document.getElementById ("resultInfo");
let secret = Math.floor(Math.random() * 100) + 1;

function guessNumber(){
    let guessInput = parseInt (document.getElementById("guess").value)

        if(guessInput === secret) {
            resultInfo.textContent = "Congratulations! " + secret + " is the secret number. Reload the page to play again";
        }
        else if(guessInput < secret) {
            resultInfo.textContent = "Sorry, your number is too low. Go higher.";
        }
        else if(guessInput > secret) {
            resultInfo.textContent = "Sorry, your number is too high. Go lower.";
        }
        
}