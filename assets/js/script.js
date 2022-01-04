// GIVEN I am taking a code quiz

// WHEN I click the start button
// THEN a timer starts and I am presented with a question

// WHEN I answer a question
// THEN I am presented with another question

// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock

// WHEN all questions are answered or the timer reaches 0
// THEN the game is over

// WHEN the game is over
// THEN I can save my initials and my score

var questions = [
    {
        question: "Question 1: What is the name of Harry's beloved owl?",
        choices: ["Hedwig","Luna","Dobby","Scabbers"],
        answer: "Hedwig"
    },
    {
        question: "Question 2: What does Professor McGonagall teach?",
        choices: ["Potions","Transfiguration","Defense Against the Dark Arts","Herbology"],
        answer: "Transfiguration"
    },    
    {
        question: "Question 3: How is Bellatrix Lestrange related to Draco Malfoy?",
        choices: ["She's his mom.","She's his aunt.","She's his girlfriend.","She's his cat."],
        answer: "She's his aunt."
    },
    {
        question: "Question 4: What is Albus Dumbledore's fourth name?",
        choices: ["Percival","Wulfric","Brian","Aurelius"],
        answer: "Brian"
    },
    {
        question: "Question 5: Who is on the first chocolate frog card that Harry gets?",
        choices: ["Dobby the House Elf","Moaning Myrtle","Rita Skeeter","Albus Dumbledore"],
        answer: "Albus Dumbledore"
    },
];

console.log(questions[1].choices[0])

// Selectors
var startBtn = document.querySelector("#start");
var startScreen = document.querySelector("#start-screen");
var quizScreen = document.querySelector("#quiz-screen");
var endScreen = document.querySelector("#end-screen")
var timerEl = document.querySelector("#timer");
var answersEl = document.querySelector("#answers");
var scoreEl = document.querySelector("#score");
var submitButton = document.querySelector("#submit-score");
var initialsEl = document.querySelector("#initials");

// Variables
var timeLeft = 60;
var timeInterval;
var questionIndex = 0;
var score = 0;

function startGame() {
  startScreen.classList.add("hide");
  quizScreen.classList.remove("hide");
  timeInterval = setInterval(function () {
      timeLeft--;
      timerEl.textContent = timeLeft;
      if (timeLeft <=  0) {
          endGame()
      }
  }, 1000);
  renderQuestions();
}

function renderQuestions() {
    var currentQ = questions[questionIndex];

    var titleElement = document.getElementById("title");
    titleElement.textContent = currentQ.question;

    answersEl.innerHTML = "";

    currentQ.choices.forEach(function(answer){
        var answerButton = document.createElement("button");
        answerButton.setAttribute("value", answer);
        answerButton.textContent = answer;

        answerButton.onclick = checkAnswer

        answersEl.appendChild(answerButton);
    })
}

function checkAnswer() {
    if (this.value !== questions[questionIndex].answer) {
        timeLeft -= 10
    } else {
        score++
    }

    questionIndex++;

    if (questionIndex === questions.length) {
        endGame();
    } else {
        renderQuestions()
    }
}

function endGame() {
    clearInterval(timeInterval);
    quizScreen.classList.add("hide");
    endScreen.classList.remove("hide");
    scoreEl.textContent = score;
}


function saveScore() {
    var initials = initialsEl.value;

    var newScore = {
        initials,
        score
    }
    
    var allScores = JSON.parse(window.localStorage.getItem("highscores")) || [];

    allScores.push(newScore);
    window.localStorage.setItem("highscores", JSON.stringify(allScores));
}

// event listeners
startBtn.addEventListener("click", startGame);
submitButton.addEventListener("click", saveScore)
