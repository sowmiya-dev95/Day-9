
var randomNumber1 = Math.floor(Math.random() * 6) + 1 ;// 1-6

var randomDiceImage = "dice" + randomNumber1 + ".png"; // dice1.png -dice6.png

var randomImageSource = "images/" + randomDiceImage;// images/dice1.png - images/dice6.png

var image1= document.querySelectorAll("img")[0];

image1.setAttribute("src", randomDiceSource);



document.querySelectorAll("img") [1].setAttribute("src", "images/dice" + (Math.floor(Math.random() * 6) + 1) + ".png") ; 


if (randomNumber1 > randomNumber2) {
    Document.querySelector("h1").innerHTML = "🚩 player 1 Wins!";
}
else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML =  "Player 2 Wins! 🚩"
}
else {
    document.querySelector("h1").innerHTML = "Draw!"
}
