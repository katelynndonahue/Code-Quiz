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

// Variables
var timeLeft = 60;
var timeInterval;

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
}

function endGame() {
    clearInterval(timeInterval);
    quizScreen.classList.add("hide");
    endScreen.classList.remove("hide")
}
// event listeners
startBtn.addEventListener("click", startGame);
