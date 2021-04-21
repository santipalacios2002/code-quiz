var goBackBtn = document.querySelector("#goBackBtn")
var finalplayerScores = [];

goBackBtn.addEventListener("click", function(event) {
    event.preventDefault();
    console.log(event)
    window.location.replace("./index.html")
});


var player = localStorage.getItem('intials')
var score = localStorage.getItem('score');
var x = document.createElement("li");
var t = document.createTextNode(`${player} - ${score}`);
x.appendChild(t);
document.getElementById("top-scores").appendChild(x);