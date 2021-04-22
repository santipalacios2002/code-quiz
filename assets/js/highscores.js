var goBackBtn = document.querySelector("#goBackBtn")
var clearBtn = document.querySelector('#clearBtn')
var finalplayerScores = [];

goBackBtn.addEventListener("click", function(event) {
    event.preventDefault();
    console.log(event)
    window.location.replace("./index.html")
});

clearBtn.addEventListener("click", function() {
    localStorage.clear();
    document.getElementById('top-scores').innerHTML = ""
})

finalplayerScores = JSON.parse(localStorage.getItem('scores'));
finalplayerScores.sort(compare);
console.log('this is the final scores sorted: ', finalplayerScores)

for (let index = 0; index < finalplayerScores.length; index++) {
    var x = document.createElement("li");
    var t = document.createTextNode(`${finalplayerScores[index].userInitials.toUpperCase()} - ${finalplayerScores[index].userScore}`);
    x.appendChild(t);
    document.getElementById("top-scores").appendChild(x);
}



// var points = [
//     {
//     userInitials:"LT",
//     userScore:26},
//     {
//     userInitials:"SP",
//     userScore:15},
//     {
//     userInitials:"PP",
//     userScore:24
//         }];


function compare( a, b ) {
    if ( a.userScore < b.userScore ){
        return 1;
    }
    if ( a.userScore > b.userScore ){
        return -1;
    }
    return 0;
    }


