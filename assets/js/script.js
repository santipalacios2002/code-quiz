//Select time timer element
var timeEl = document.querySelector('#seconds');
var startQuizBtn = document.querySelector('#start-quiz');
var submitBtn = document.querySelector('#submit');
var choiceBtn = document.querySelectorAll('.box');
var questionEl = document.querySelector('#question');
var choiceOneEl = document.querySelector('#one');
var choiceTwoEl = document.querySelector('#two');
var choiceThreeEl = document.querySelector('#three');
var choiceFourEl = document.querySelector('#four');
var choiceList = document.querySelector('.container');
var finalScore = document.querySelector('#finalScore');
var scoreEl = document.querySelector('#score');
var answerEl = document.querySelector('#answer');
var correctAudio = new Audio('./assets/audio/correct.mp3');
var wrongAudio = new Audio('./assets/audio/wrong.mp3');
var questionIndex = 0; //initializes question index
var secondsLeft = 50;

var highScores = localStorage.getItem("highscores");


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


//listen for click event to start game
startQuizBtn.addEventListener('click', function(event) {
    console.log(event)
    document.getElementById("introduction").hidden = true;
    document.getElementById("startBtn").hidden = true;
    choiceList.removeAttribute('hidden');
    setTimer();
    question();
})

//research object.keys(add my object here).map  - object mapping and key-value pairs

// ask in class how can I use variable as an attribute

for (let index = 0; index < 4; index++) {
    choiceBtn[index].addEventListener('click', function(event) {
        var element = event.target
        console.log(element)
        var chosen = element.dataset.choices
        // console.log('check this ' + quiz[questionIndex].`${chosen}`)
        console.log("chosen: ", chosen)
        console.log("quiz: ", quiz[questionIndex])
        if (quiz[questionIndex][chosen] == quiz[questionIndex].answer) {
            console.log(`correct answer`)
            answerEl.textContent = "Correct!";
            fadeIn();
            correctAudio.play();
        } else {
            secondsLeft = secondsLeft - 10;
            answerEl.textContent = "Wrong!";
            fadeIn();
            wrongAudio.play();
        }
        questionIndex++;
        question();
    }
)}


//delete in the future

// choiceBtn[0].addEventListener('click', function() {
//     console.log('button 1 clicked')
//     if (quiz[questionIndex].choiceOne == quiz[questionIndex].answer) {
//         console.log(`correct answer`)
//         answerEl.textContent = "Correct!";
//         fadeIn();
//         correctAudio.play();
//     } else {
//         secondsLeft = secondsLeft - 10;
//         answerEl.textContent = "Wrong!";
//         fadeIn();
//         wrongAudio.play();
//     }
//     questionIndex++;
//     question();
// })
// choiceBtn[1].addEventListener('click', function() {
//     console.log('button 2 clicked')
//     if (quiz[questionIndex].choiceTwo == quiz[questionIndex].answer) {
//         console.log(`correct answer`)
//         answerEl.textContent = "Correct!";
//         fadeIn();
//         correctAudio.play();
//     } else {
//         secondsLeft = secondsLeft - 10;
//         answerEl.textContent = "Wrong!";
//         fadeIn();
//         wrongAudio.play();
//     }
//     questionIndex++;
//     question();
// })
// choiceBtn[2].addEventListener('click', function() {
//     console.log('button 3 clicked')
//     if (quiz[questionIndex].choiceThree == quiz[questionIndex].answer) {
//         console.log(`correct answer`)
//         answerEl.textContent = "Correct!";
//         fadeIn();
//         correctAudio.play();
//     } else {
//         secondsLeft = secondsLeft - 10;
//         answerEl.textContent = "Wrong!";
//         fadeIn();
//         wrongAudio.play();
//     }
//     questionIndex++;
//     question();
// })
// choiceBtn[3].addEventListener('click', function() {
//     console.log('button 4 clicked')
//     if (quiz[questionIndex].choiceFour == quiz[questionIndex].answer) {
//         console.log(`correct answer`)
//         answerEl.textContent = "Correct!";
//         fadeIn();
//         correctAudio.play();
//     } else {
//         secondsLeft = secondsLeft - 10;
//         answerEl.textContent = "Wrong!";
//         fadeIn();
//         wrongAudio.play();
//     }
//     questionIndex++;
//     question();
// })

//set timer
function setTimer() {
    // Sets interval in variable
    var timerInterval = setInterval(function() { 
        secondsLeft--;
        timeEl.textContent = secondsLeft;
      if(secondsLeft === 0 || questionIndex === 5) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);  
    }
  }, 1000);
}

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
        scoreEl.textContent = secondsLeft - 1;
        document.getElementById("submit-form").style.display="inline-flex";
    }
}

function fadeIn() {
    var fade = document.getElementById("answer")
    var opacity = 0;
    // Sets interval in variabl
    var fadeInterval = setInterval(function() { 
      if(opacity < 1) {
          opacity = opacity + 0.1;
          fade.style.opacity = opacity;    
        } else {
            clearInterval(fadeInterval);
        }
  }, 50);
}

submitBtn.addEventListener("click", function(event) {
    event.preventDefault();
    var initials = document.querySelector("#initials").value;
    console.log(initials);
    if (initials === "") {
      displayMessage("error", "Initials cannot be blank");
    }  
      localStorage.setItem("intialsArray", initials);
      window.location.replace("./highscores.html")
  });