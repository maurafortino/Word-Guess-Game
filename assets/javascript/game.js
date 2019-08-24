//this function shows the game when a person clicks the 'Let's play button'
var characterList =[

    characterOne = {
        name: 'celie johnson',
        bookTitle: 'The Color Purple',
        img: "assets/images/celie-johnson.jpeg"

},
    characterTwo = {
        name: 'starr carter',
        bookTitle: 'The Hate U Give',
        img: "assets/images/starr-carter.jpeg"

},
    characterThree = {
        name: 'minerva mirabal',
        bookTitle: 'In the Time of the Butterflies',
        img: "assets/images/minerva-mirabal.jpg"
},

    characterFour = {
        name: 'hermionie granger',
        bookTitle: 'Harry Potter',
        img: "assets/images/hermione-granger.jpeg"
},

    characterFive = { 
        name: 'rachel chu',
        bookTitle: 'Crazy Rich Asians',
        img: "assets/images/rachel-chu.png"
        
}
];
var leftColumn = document.getElementById("left-column");
var rightColumn = document.getElementById("right-column");
var userGuess = document.getElementById("guess");
var targetAnswer = document.getElementById("answer");
var targetGuessed = document.getElementById("guessed-letters");
var targetPhoto = document.getElementById("image-place-holder");
var randomCharacter = characterList[Math.floor(Math.random() *5)];
var characterName = randomCharacter.name;
var characterBook = randomCharacter.bookTitle;
var characterImage = randomCharacter.img;
var newSpan = document.createElement("span");

var wins = 0;
var targetWins = document.querySelectorAll('#wins')[0];
targetWins.textContent = wins;
targetWins.classList.add("score-style");

var losses = 0;
var targetLosses = document.getElementById("losses");
//targetLosses.textContent = "losses: " + losses;
targetLosses.classList.add("score-style");

var guesses = 10;
var targetGuesses = document.getElementById("guesses-left");
targetGuesses.textContent = "guesses left: " + guesses;
var lettersGuessed = []; //letters guessed start with an empty array
targetGuessed.textContent = "letters guessed: " + lettersGuessed;

    // //shows the score which starts at 0 wins and 0 losses
    // wins = document.getElementById("wins");
    // wins.textContent = "wins: " + 0;
    //     //adds style to the wins section
 

    // losses = document.getElementById("losses");
    // losses.textContent = "losses: " + 0;
    //     //adds style to the losses section
    //     losses.classList.add("score-style");

    // //shows how many guesses you have left and the letters you have guessed
    // guesses = document.getElementById("guesses-left");
    // guesses.textContent = "guesses left: " + 10;


    //adds styles to the columns
    leftColumn.classList.add("game-style");
    rightColumn.classList.add("game-style");
//this function starts the game 
function startGame(){

//adds an image to the imagePlaceHolder div based on the random charater's name 
var image = document.getElementById("image-place-holder");
image.setAttribute("src", characterImage);

    //for loop to go through the characters name 
    for(var i = 0; i < characterName.length; i++){

    //adds underscores to the answer div based on the chosen random character's name
    var underscore = document.createElement("div");
    underscore.innerHTML = "_ "
    underscore.classList.add("add-underscore");
    underscore.style.display = "inline";
    underscore.setAttribute("data-letter", characterName[i]);
    targetAnswer.append(underscore);
    };
};

//this function shows a hint when hint button is clicked
function showHint(){
    var newP = document.createElement("p");
    document.getElementById("hint").appendChild(newP);
    newP.innerHTML = "this character appears in " + "<em>" + characterBook + "</em>";

};






