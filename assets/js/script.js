//Select time timer element
var timeEl = document.querySelector('#seconds');
var startQuiz = document.querySelector('#start-quiz');
console.log(startQuiz);
console.log(timeEl);
var secondsLeft = 10;

//set timer
function setTimer() {
    // Sets interval in variable
    var timerInterval = setInterval(function() { 
        secondsLeft--;
        timeEl.textContent = secondsLeft;
      if(secondsLeft === 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);  
    }
  }, 1000);
}

//listen for click event to start game
startQuiz.addEventListener('click', function() {
    setTimer();
})
