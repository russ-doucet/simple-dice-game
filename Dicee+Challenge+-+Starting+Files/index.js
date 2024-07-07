// Generate two random numbers:
var rand1 = Math.floor(Math.random() * 6);
var rand2 = Math.floor(Math.random() * 6);

// Store all the possible dice images in an array
var imgArr = ["./images/dice1.png", "./images/dice2.png", "./images/dice3.png", "./images/dice4.png", "./images/dice5.png", "./images/dice6.png"];

// Changing the left and right die to new *random* values/images
document.querySelector(".img1").src = imgArr[rand1];
document.querySelector(".img2").src = imgArr[rand2];

// Determing the winner between the left and right die (If there's a tie the title will just say to refresh)
if(rand1 > rand2){
    document.querySelector("h1").innerHTML = "Player One Wins!";
}
else if(rand2 > rand1){
    document.querySelector("h1").innerHTML = "Player Two Wins!";
}
