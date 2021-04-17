//Select time timer element
var timeEl = document.querySelector('#seconds');
var startQuizBtn = document.querySelector('#start-quiz');
var questionEl = document.querySelector('#question')
console.log(startQuizBtn);
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
startQuizBtn.addEventListener('click', function() {
  questionEl.textContent = 'Commonly used data types DO NOT include:'
  document.getElementById("introduction").hidden = true;
  document.getElementById("startBtn").hidden = true;
  setTimer();
})
