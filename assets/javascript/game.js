//this function shows the game when a person clicks the 'Let's play button'
var characterList =[

    characterOne = {
        name: 'jo march',
        spaces: '_ _',
        bookTitle:'Little Women',
},
    characterTwo = {
        name: 'starr carter',
        spaces: '_ _ _ _ _',
        bookTitle: 'The Hate U Give',

},
    characterThree = {
        name: 'bri jackson',
        firstNameSpaces: '_ _ _',
        lastNameSpaces:'_ _ _ _ _ _ _',
        bookTitle: 'On The Come Up',
},

    characterFour = {
        name: 'hermionie',
        spaces: '_ _ _ _ _ _ _ _ _',
        bookTitle: 'Harry Potter'
},

    characterFive = { 
        name: 'zelie',
        spaces: '_ _ _ _ _',
        bookTitle: 'Children of Blood and Bone'
}
];

var userGuess = document.getElementById("guess");
var targetAnswer = document.getElementById("answer");
var tagertGuessed = document.getElementById("guessedLetters");
var randomCharacter = characterList[Math.floor(Math.random() *5)];
var characterName = randomCharacter.name;
var characterSpaces = randomCharacter.firstNamespaces + " " + randoncomCharacter.lastNameSpaces;
var characterBook = randomCharacter.bookTitle;
var newSpan = document.createElement("span");




//this function starts the game 
function startGame(){
    targetAnswer.textContent = characterSpaces;
    console.log(characterName)
    
};

//if user guesses the answer right, function will display the answer
function moveLetter(){
    if(randomCharacter.indexOf(userGuess) > -1 && randomCharacter.indexOf(userGuess) < randomCharacter.length){
        userGuess.addEventListener("keydown", function(event){
        newSpan.textContent = event.key;
        document.getElementById("random").appendChild(newSpan);
        });
    } else{
        alert("wrong!");
    };
};



//this function shows a hint when hint button is clicked
function showHint(){
    var newP = document.createElement("p");
    document.getElementById("hint").appendChild(newP);
    newP.innerHTML = "this character appears in " + "<em>" + characterBook + "</em>";

};
