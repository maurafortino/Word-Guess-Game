//this function shows the game when a person clicks the 'Let's play button'
var characterList = [

    characterOne = {
        name: 'minerva',
        spelling: ['m', 'i', 'n', 'e', 'r', 'v', 'a'],
        img: "assets/images/minerva-mirabal.jpg"

    },
    characterTwo = {
        name: 'melba',
        spelling: ['m', 'e', 'l', 'b', 'a'],
        img: "assets/images/melba.jpeg"
    },
        characterThree = {
            name: 'lisbeth',
            spelling: ['l', 'i', 's', 'b', 'e', 't', 'h'],
            img: "assets/images/lisbeth-salander.png"
    },

        characterFour = {
            name: 'scout',
            spelling: ['s', 'c', 'o', 'u', 't'],
            img: "assets/images/scout-finch.jpeg"
    },

        characterFive = { 
            name: 'rachel',
            spelling: ['r', 'a', 'c', 'h', 'e', 'l'],
            img: "assets/images/rachel-chu.png"

     }
];
var randomCharacter = characterList[Math.floor(Math.random() * characterList.length)];
var characterName = randomCharacter.name;
var characterBook = randomCharacter.bookTitle;
var characterImage = randomCharacter.img;
var characterSpelling = randomCharacter.spelling;
var targetWinsText = document.getElementById("wins");
var targetLossesText = document.getElementById("losses");
var targetAnswerText = document.getElementById("answer");
var targetGuessedLettersText = document.getElementById("guessed-letters");
var targetPhotoSpace = document.getElementById("image-place-holder");
var targetGuessesText = document.getElementById("guesses-left");
//adds styles to the columns
var leftColumn = document.getElementById("left-column");
var rightColumn = document.getElementById("right-column");
leftColumn.classList.add("game-style");
rightColumn.classList.add("game-style");

var answerArray = [];
var lettersGuessed = []; 
var guessesLeft = 10;

function updateScore() {
    targetWinsText.textContent = "wins: " + wins++;
}

var wins = 0;
targetWinsText.textContent = "wins: " + wins;
var losses = 0;
targetLossesText.textContent = "losses: " + losses;
targetGuessesText.innerHTML = guessesLeft;
targetGuessedLettersText.textContent = lettersGuessed;
targetAnswerText.classList.add("answer-style");
targetWinsText.classList.add("score-style");
targetLossesText.classList.add("score-style");


//this function starts the game 
function startGame() {

    //adds an image to the imagePlaceHolder div based on the random charater's name 
    var image = document.getElementById("image-place-holder");
    image.setAttribute("src", characterImage);

    //for loop to go through the characters name 
    for (var i = 0; i < characterName.length; i++) {

        //adds underscores to the answer div based on the chosen random character's name
        var underscore = document.createElement("div");
        underscore.innerHTML = "_ "
        underscore.classList.add("add-underscore");
        underscore.style.display = "inline";
        underscore.setAttribute("data-letter", characterSpelling[i]);
        targetAnswerText.append(underscore);
    };

};

function replay() {
    var playAgain = confirm("do you want to play again?")
    if (playAgain === true) {
    answerArray = [];
    targetAnswerText.textContent = "";
    guessesLeft = 10;
    lettersGessed = [];
    randomCharacter = characterList[Math.floor(Math.random() * characterList.length)];
    characterName = randomCharacter.name;
    characterBook = randomCharacter.bookTitle;
    characterImage = randomCharacter.img;
    characterSpelling = randomCharacter.spelling;

    var image = document.getElementById("image-place-holder");
    image.setAttribute("src", characterImage);

    //for loop to go through the characters name 
    for (var i = 0; i < characterName.length; i++) {
        //adds underscores to the answer div based on the chosen random character's name
        var underscore = document.createElement("div");
        underscore.innerHTML = "_ "
        underscore.classList.add("add-underscore");
        underscore.style.display = "inline";
        underscore.setAttribute("data-letter", characterSpelling[i]);
        targetAnswerText.appendChild(underscore);
    };
}
}

function replaceUnderscore() {
    targetAnswerText.textContent = answerArray.join(" ");
};

document.onkeyup = function letterPressed() {
    var userGuess = event.key
    var checkGuess = characterSpelling.includes(userGuess);
    var checkLetters = lettersGuessed.includes(userGuess);
    // var lettersChecked = lettersGuessed.includes(userGuess);

    if (checkGuess === true && guessesLeft > 1) {

        var x = characterSpelling.indexOf(userGuess);
        answerArray[x] = userGuess;
        replaceUnderscore();

        if (JSON.stringify(characterSpelling) === JSON.stringify(answerArray)) {
            updateScore();
            alert("you win this round!");
            replay();
            }
        }else if(checkGuess === false && guessesLeft > 1 && checkLetters === false){
            targetGuessesText.textContent = guessesLeft--;
            lettersGuessed.push(userGuess);
        }else if(checkGuess === false && guessesLeft <= 1){
            alert('you lose. refresh page to play again'); 
        }
    };
