//Select time timer element
var timeEl = document.querySelector('#seconds');
var startQuizBtn = document.querySelector('#start-quiz');
var questionEl = document.querySelector('#question');
var choiceOneEl = document.querySelector('#one');
var choiceTwoEl = document.querySelector('#two');
var choiceThreeEl = document.querySelector('#three');
var choiceFourEl = document.querySelector('#four');
var choiceList = document.querySelector('.container');
var correctAudio = new Audio('./assets/audio/correct.mp3');
var wrongAudio = new Audio('./assets/audio/wrong.mp3');

//for later to play the ding =  correctAudio.play();


console.log(choiceList)

var quiz = [{
    question: 'Quito is the capital of ______',
    answer: 'Ecuador',
    choiceOne: 'USA',
    choiceTwo: 'Guatemala',
    choiceThree: 'Ecuador',
    choiceFour: 'Mexico'
}, {
    question: 'What is the largest state in the United States?',
    answer: 'Alaska',
    choiceOne: 'North Carolina',
    choiceTwo: 'Alaska',
    choiceThree: 'Florida',
    choiceFour: 'Texas'
}, {
    question: 'What is the capital of Scotland?',
    answer: 'Edinburgh',
    choiceOne: 'Dundee',
    choiceTwo: 'Glasgow',
    choiceThree: 'London',
    choiceFour: 'Edinburgh'
}, {
    question: 'What is the smallest city in the world?',
    answer: 'Vatican City',
    choiceOne: 'Monaco',
    choiceTwo: 'Switzerland',
    choiceThree: 'Liechtenstein',
    choiceFour: 'Mexico' 
}, {
    question: 'What is Earth\'s largest continent?',
    answer: 'Asia',
    choiceOne: 'Asia',
    choiceTwo: 'Antartica',
    choiceThree: 'Africa',
    choiceFour: 'Europe' 
}    
]


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
  questionEl.textContent = quiz[0].question;
  document.getElementById("introduction").hidden = true;
  document.getElementById("startBtn").hidden = true;
  choiceList.removeAttribute('hidden');
  choiceOneEl.textContent = quiz[0].choiceOne;
  choiceTwoEl.textContent = quiz[0].choiceTwo;
  choiceThreeEl.textContent = quiz[0].choiceThree;
  choiceFourEl.textContent = quiz[0].choiceFour;
  setTimer();

})
