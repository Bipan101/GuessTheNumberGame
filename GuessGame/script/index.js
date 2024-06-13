let userInput =document.getElementById('guess');
let guess = document.getElementById('gsc1');
let tryp = document.getElementById('try');
let tryl= document.getElementById('tries');
let button = document.getElementById('btn');
let image = document.getElementById('img-hide');
let hint = document.getElementById('hint');
let previousGuesses = document.getElementById('prev-guess');

let randomNumber = '';
var reg = /^\d+$/;
let userTries = 10;
let prevGuess = [];

window.onload =(event) => {
    randomNumber = parseInt(Math.random() * 101);
    tryl.innerHTML = userTries;
    console.log(randomNumber);
}

button.addEventListener('click', function(){
    if(!reg.test(userInput.value)){
        alert("Only number allowed")
    }
    else{
        if(userTries > 0){
            if(+userInput.value === randomNumber){
                image.style.display = 'block';
                hint.innerHTML = "";
            }
            else{
                if(+userInput.value > randomNumber){
                    userTries -= 1;
                    tryl.innerHTML = userTries;
                    prevGuess.push(userInput.value);
                    previousGuesses.innerHTML = prevGuess;
                    hint.innerHTML = "Your guess is greater than actual number";
                }
                else{
                    userTries -= 1;
                    tryl.innerHTML = userTries;
                    prevGuess.push(userInput.value);
                    previousGuesses.innerHTML = prevGuess;
                    hint.innerHTML = "Your guess is lower than actual number";
        
            }
        }
        }else{
            button.disabled = true;
        }
       
    }
});