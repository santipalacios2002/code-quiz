//=================================================================================
//===========================  Variable initialization  ===========================
//=================================================================================

var goBackBtn = document.querySelector("#goBackBtn")
var clearBtn = document.querySelector('#clearBtn')
var finalplayerScores = JSON.parse(localStorage.getItem('scores'));

//=================================================================================
//=================================================================================
//=================================================================================
// console.log('before if else statemnt is: ', finalplayerScores)

if (finalplayerScores === null) {     
    // console.log('if result is: ', finalplayerScores)                                                 //checks if final scores is empty to build the score array
} else {
    // console.log('else result is: ', finalplayerScores)
    finalplayerScores = JSON.parse(localStorage.getItem('scores'));
    finalplayerScores.sort(compare);
    for (let index = 0; index < finalplayerScores.length; index++) {
        var x = document.createElement("li");
        var t = document.createTextNode(`${index + 1}. ${finalplayerScores[index].userInitials.toUpperCase()} - ${finalplayerScores[index].userScore}`);
        x.appendChild(t);
        document.getElementById("top-scores").appendChild(x);
        x.className += "userList";
    }
}
// console.log('this is the final scores sorted: ', finalplayerScores)

//=========================================================================
//===========================  Event Listeners  ===========================
//=========================================================================

goBackBtn.addEventListener("click", function(event) {
    console.log(event)
    window.location.replace("./index.html")
});

clearBtn.addEventListener("click", function() {
    localStorage.clear();
    document.getElementById('top-scores').innerHTML = ""
})

//==================================================================
//===========================  Function  ===========================
//==================================================================

function compare( a, b ) {                                                  //funciton that compares the values and sorts them from high to low scores
    if ( a.userScore < b.userScore ){
        return 1;
    }
    if ( a.userScore > b.userScore ){
        return -1;
    }
    return 0;
}


