var goBackBtn = document.querySelector("#goBackBtn")
var finalplayerScores = [];

goBackBtn.addEventListener("click", function(event) {
    event.preventDefault();
    console.log(event)
    window.location.replace("./index.html")
});

finalplayerScores = JSON.parse(localStorage.getItem('finalplayerScores'));

var x = document.createElement("li");
var t = document.createTextNode(`${finalplayerScores[0].userInitials} - ${finalplayerScores[0].userScore}`);
x.appendChild(t);
document.getElementById("top-scores").appendChild(x);