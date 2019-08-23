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

var userGuess = document.getElementById("guess");
var targetAnswer = document.getElementById("answer");
var tagertGuessed = document.getElementById("guessed-letters");
var targetPhoto = document.getElementById("image-place-holder");
var randomCharacter = characterList[Math.floor(Math.random() *5)];
var characterName = randomCharacter.name;
var characterBook = randomCharacter.bookTitle;
var characterImage = randomCharacter.img;
var newSpan = document.createElement("span");




//this function starts the game 
function startGame(){
    for(var i = 0; i < characterName.length; i++){

        //adds underscores to the answer div based on the chosen random character's name
        var underscore = document.createElement("div");
        underscore.innerHTML = "_ "
        underscore.classList.add("add-underscore");
        underscore.style.display = "inline";
        underscore.setAttribute("data-letter", characterName[i]);
        targetAnswer.append(underscore);
    }
        //adds an image to the imagePlaceHolder div based on the random charater's name

    var image = document.getElementById("image-place-holder");
    image.setAttribute("src", characterImage);
     
    
};

//if user guesses the answer right, function will display the answer
// function moveLetter(){
//     if(randomCharacter.indexOf(userGuess) > -1 && randomCharacter.indexOf(userGuess) < randomCharacter.length){
//         userGuess.addEventListener("keydown", function(event){
//         newSpan.textContent = event.key;
//         document.getElementById("random").appendChild(newSpan);
//         });
//     } else{
//         alert("wrong!");
//     };
// };

//a for loop to generate underscores




//this function shows a hint when hint button is clicked
function showHint(){
    var newP = document.createElement("p");
    document.getElementById("hint").appendChild(newP);
    newP.innerHTML = "this character appears in " + "<em>" + characterBook + "</em>";

};
