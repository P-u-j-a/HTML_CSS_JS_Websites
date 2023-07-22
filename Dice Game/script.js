
let randomNo1=Math.floor(Math.random()*6)+1;
randomImage1="images/"+"dice"+randomNo1+".png";
document.querySelector("img.img1").setAttribute("src",randomImage1)
let randomNo2=Math.floor(Math.random()*6)+1;
randomImage2="images/"+"dice"+randomNo2+".png";
document.querySelector("img.img2").setAttribute("src",randomImage2)
var x=document.querySelector("h1")
if(randomNo1>randomNo2)
x.innerHTML="Player1 Won!"
else if(randomNo1<randomNo2)
x.innerHTML="Player2 Won!"
else
x.innerHTML="Draw"

