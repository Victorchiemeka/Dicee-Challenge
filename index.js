var randomNumber1 = Math.floor(Math.random() * 6) + 1; // generates a random number from one to 6


var diceImageElement = "images/dice" + randomNumber1 + ".png";

// var randomimg = "" + diceImageElement

var img1 = document.querySelectorAll("img")[0];

img1.setAttribute("src", diceImageElement)


var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var source = "images/dice"+ randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", source)


if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player One won"
}
else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "player two won"
}
else {
    document.querySelector("h1").innerHTML = "Draw"
}

document.querySelector(".p1").innerHTML = randomNumber1;

document.querySelector(".p2").innerHTML = randomNumber2;