//Select time timer element
var timeEl = document.querySelector('#seconds');
var startQuizBtn = document.querySelector('#start-quiz');
var choiceBtn = document.querySelectorAll('.box');
var questionEl = document.querySelector('#question');
var choiceOneEl = document.querySelector('#one');
var choiceTwoEl = document.querySelector('#two');
var choiceThreeEl = document.querySelector('#three');
var choiceFourEl = document.querySelector('#four');
var choiceList = document.querySelector('.container');
var finalScore = document.querySelector('#finalScore');
var score =document.querySelector('#score');
var correctAudio = new Audio('./assets/audio/correct.mp3');
var wrongAudio = new Audio('./assets/audio/wrong.mp3');
var questionIndex = 0; //initializes question index

//for later to play the ding =  correctAudio.play();


console.log(choiceList)

var quiz = [{
    question: 'Quito is the capital of which country?',
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
    question: 'What is the smallest country in the world?',
    answer: 'Vatican City',
    choiceOne: 'Monaco',
    choiceTwo: 'Switzerland',
    choiceThree: 'Liechtenstein',
    choiceFour: 'Vatican City' 
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
var secondsLeft = 50;

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
    document.getElementById("introduction").hidden = true;
    document.getElementById("startBtn").hidden = true;
    choiceList.removeAttribute('hidden');
    setTimer();
    question();
})

choiceBtn[0].addEventListener('click', function() {
    console.log('button 1 clicked')
    if (quiz[questionIndex].choiceOne == quiz[questionIndex].answer) {
        console.log(`correct answer`)
        correctAudio.play();
    } else {
        wrongAudio.play();
    }
    questionIndex++;
    question();
})
choiceBtn[1].addEventListener('click', function() {
    console.log('button 2 clicked')
    if (quiz[questionIndex].choiceTwo == quiz[questionIndex].answer) {
        console.log(`correct answer`)
        correctAudio.play();
    } else {
        wrongAudio.play();
    }
    questionIndex++;
    question();
})
choiceBtn[2].addEventListener('click', function() {
    console.log('button 3 clicked')
    if (quiz[questionIndex].choiceThree == quiz[questionIndex].answer) {
        console.log(`correct answer`)
        correctAudio.play();
    } else {
        wrongAudio.play();
    }
    questionIndex++;
    question();
})
choiceBtn[3].addEventListener('click', function() {
    console.log('button 4 clicked')
    if (quiz[questionIndex].choiceFour == quiz[questionIndex].answer) {
        console.log(`correct answer`)
        correctAudio.play();
    } else {
        wrongAudio.play();
    }
    questionIndex++;
    question();
})


function question() {
    if (questionIndex < 5) {
        questionEl.textContent = quiz[questionIndex].question;
        choiceOneEl.textContent = quiz[questionIndex].choiceOne;
        choiceTwoEl.textContent = quiz[questionIndex].choiceTwo;
        choiceThreeEl.textContent = quiz[questionIndex].choiceThree;
        choiceFourEl.textContent = quiz[questionIndex].choiceFour;
    } else {
        choiceList.setAttribute('hidden', true);
        finalScore.removeAttribute('hidden');
        questionEl.textContent = 'ALL DONE!';
        score.textContent = secondsLeft;
        clearInterval();
    }
}