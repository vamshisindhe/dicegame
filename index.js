var Rondomnumber1 = Math.floor(Math.random()*6)+1;
var Rondomimage1 = "images/dice"+ Rondomnumber1 +".png";
document.querySelectorAll("img")[0].setAttribute("src",Rondomimage1)

var Rondomnumber2 = Math.floor(Math.random()*6)+1;
var Rondomimage2 = "images/dice"+ Rondomnumber2 +".png";
document.querySelectorAll("img")[1].setAttribute("src",Rondomimage2)

if(Rondomnumber1 > Rondomnumber2){
  document.querySelector("h1").innerHTML= "Player 1 wins!";
}
else if (Rondomnumber1<Rondomnumber2) {
    document.querySelector("h1").innerHTML="Player 2 wins!";
} 
else{
    document.querySelector("h1").innerHTML="Draw!"
}