//=================================================================================
//===========================  Variable initialization  ===========================
//=================================================================================

var timeEl = document.querySelector('#seconds');
var startQuizBtn = document.querySelector('#start-quiz');
var submitBtn = document.querySelector('#submit');
var choiceBtn = document.querySelectorAll('.box');
var viewHighScoresBtn = document.querySelector('#viewHighScoresBtn');
var questionEl = document.querySelector('#question');
var choiceOneEl = document.querySelector('#one');
var choiceTwoEl = document.querySelector('#two');
var choiceThreeEl = document.querySelector('#three');
var choiceFourEl = document.querySelector('#four');
var choiceList = document.querySelector('.container');
var finalScore = document.querySelector('#finalScore');
var scoreEl = document.querySelector('#score');
var answerEl = document.querySelector('#answer');
var messageDiv = document.querySelector('#msg');
var correctAudio = new Audio('./assets/audio/correct.mp3');
var wrongAudio = new Audio('./assets/audio/wrong.mp3');
var questionIndex = 0; 
var secondsLeft = 50;
var scoresToLocal = [];
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
//=================================================================================
//=================================================================================
//=================================================================================



for (var index = 0; index < 4; index++) {                                   //loops through questions
    choiceBtn[index].addEventListener('click', function(event) {
        var element = event.target
        var chosen = element.dataset.choices
        if (quiz[questionIndex][chosen] == quiz[questionIndex].answer) {    //logic for correct answer
            console.log(`correct answer`)
            answerEl.textContent = "Correct!";
            fadeIn();
            wrongAudio.pause();
            correctAudio.play();
        } else {                                                            //logic for wrong answer
            secondsLeft = secondsLeft - 10;                                 //penalized with 10 seconds
            answerEl.textContent = "Wrong!";
            fadeIn();
            correctAudio.pause();
            wrongAudio.play();
        }
        questionIndex++;
        question();
    }
    )}
    

//===================================================================
//===========================  Functions  ===========================
//===================================================================

function setTimer() {                                                       //sets timer
    var timerInterval = setInterval(function() { 
        secondsLeft--;
        timeEl.textContent = secondsLeft;
        if(secondsLeft === 0 || questionIndex === 5) {                      //logic to prevent from going over number of questions or time
            if (timeEl.textContent < 0) {                                   //logic prevents time from showing negative numbers
                timeEl.textContent = 0
            }
            document.getElementById('answer').style.display ='none';        //hidding the message again after 3 second
            choiceList.setAttribute('hidden', true);
            finalScore.removeAttribute('hidden');
            questionEl.textContent = 'ALL DONE!';
            document.getElementById("submit-form").style.display="inline-flex";
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
        scoreEl.textContent = secondsLeft - 1;
        if (scoreEl.textContent < 0) {    //logic prevents score from showing negative numbers
            scoreEl.textContent = 0
        }
        document.getElementById('answer').style.display ='none'; //hidding the message again after 3 second
        choiceList.setAttribute('hidden', true);
        finalScore.removeAttribute('hidden');
        questionEl.textContent = 'ALL DONE!';
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

function displayMessage(type, message) {
    messageDiv.textContent = message;
    messageDiv.setAttribute("class", type);
}


//===================================================================
//===================================================================
//===================================================================



//=========================================================================
//===========================  Event Listeners  ===========================
//=========================================================================


startQuizBtn.addEventListener('click', function(event) {                    //listen for click event to start game
    document.getElementById("introduction").hidden = true;
    document.getElementById("startBtn").hidden = true;
    choiceList.removeAttribute('hidden');
    setTimer();
    question();
})

submitBtn.addEventListener("click", function(event) {
    event.preventDefault();
    var initials = document.querySelector("#initials").value;
    console.log(initials);
    if (initials === "") {
        displayMessage("error", "Initials cannot be blank");
        return;
    }
    var checkStorage = JSON.parse(localStorage.getItem('scores'));
    if (checkStorage === null) {
        scoresToLocal = [{
            userInitials: initials.trim(),
            userScore: secondsLeft
        }]
    } else {
        console.log('thi ran')
        scoresToLocal = checkStorage.concat([{
            userInitials: initials.trim(),
            userScore: secondsLeft
        }])
    }
    console.log(scoresToLocal)
    localStorage.setItem("scores", JSON.stringify(scoresToLocal));
    window.location.replace("./highscores.html")
});

viewHighScoresBtn.addEventListener("click", function(event) {
    event.preventDefault();
    console.log(event)
    window.location.replace("./highscores.html")
});
