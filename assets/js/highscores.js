var goBackBtn = document.querySelector("#goBackBtn")
var clearBtn = document.querySelector('#clearBtn')
var finalplayerScores = [];


finalplayerScores = JSON.parse(localStorage.getItem('scores'));
finalplayerScores.sort(compare);
console.log('this is the final scores sorted: ', finalplayerScores)

for (let index = 0; index < finalplayerScores.length; index++) {
    var x = document.createElement("li");
    var t = document.createTextNode(`${index + 1}. ${finalplayerScores[index].userInitials.toUpperCase()} - ${finalplayerScores[index].userScore}`);
    x.appendChild(t);
    document.getElementById("top-scores").appendChild(x);
    x.className += "userList";
}

goBackBtn.addEventListener("click", function(event) {
    event.preventDefault();
    console.log(event)
    window.location.replace("./index.html")
});

clearBtn.addEventListener("click", function() {
    localStorage.clear();
    document.getElementById('top-scores').innerHTML = ""
})

function compare( a, b ) {
    if ( a.userScore < b.userScore ){
        return 1;
    }
    if ( a.userScore > b.userScore ){
        return -1;
    }
    return 0;
}


