var randomNumber=Math.floor(Math.random()*6+1);
var img1=document.querySelector(".img1");
if (randomNumber=="2"){
    img1.setAttribute("src","images/dice2.png");
}
else if(randomNumber=="3"){
    img1.setAttribute("src","images/dice3.png");
}
else if(randomNumber=="4"){
    img1.setAttribute("src","images/dice4.png");
}
else if(randomNumber=="5"){
    img1.setAttribute("src","images/dice5.png");
}
else if(randomNumber=="1"){
    img1.setAttribute("src","images/dice1.png");
}
else{
    img1.setAttribute("src","images/dice6.png"); 
}

var dice2=Math.floor(Math.random()*6+1);
if(dice2=="1"){
    document.querySelector(".img2").setAttribute("src","images/dice1.png");
}
else if(dice2=="2"){
    document.querySelector(".img2").setAttribute("src","images/dice2.png");
}
else if(dice2=="3"){
    document.querySelector(".img2").setAttribute("src","images/dice3.png");
}
else if(dice2=="4"){
    document.querySelector(".img2").setAttribute("src","images/dice4.png");
}
else if(dice2=="5"){
    document.querySelector(".img2").setAttribute("src","images/dice5.png");
}
else{
    document.querySelector(".img2").setAttribute("src","images/dice6.png");
}

if(randomNumber>dice2){
    document.querySelector("#result").innerHTML="Player1 has won";
}

else if(randomNumber<dice2){
    document.querySelector("#result").innerHTML="Player2 has won";
}

else{
    document.querySelector("#result").innerHTML="Draw";
}