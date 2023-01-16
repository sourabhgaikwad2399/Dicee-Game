var randomNumber1 = Math.floor((Math.random() * 6))+1;
var c = 'images/dice'+randomNumber1+'.png';
document.querySelector(".dice .img1").setAttribute("src",c);

var randomNumber2 = Math.floor((Math.random() * 6))+1;
var d = 'images/dice'+ randomNumber2 +'.png';
document.querySelector(".dice .img2").setAttribute("src",d);

var x = "🚩Player1 Won";
var y = "Player2 Won🚩";
var z = "It's a Draw";

if(randomNumber1>randomNumber2)
{
  document.querySelector(".container h1").textContent = x;
}
else if(randomNumber2>randomNumber1)
{
  document.querySelector(".container h1").textContent = y;
}
else{
  document.querySelector(".container h1").textContent = z;
}
