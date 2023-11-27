const homebutton = document.getElementById("home-btn");

homebutton.onclick = () => {
  location.href = "./home.html";
};

const instbutton = document.getElementById("bck-btn");

instbutton.onclick = () => {
  location.href = "./select.html";
};

const infobutton = document.getElementById("info-btn");

infobutton.onclick = () => {
  location.href = "./instructions.html";
};

//Background music

let bgSound = new Audio('./assets/bgmusic.mp3');

bgSound.play();
bgSound.loop=true;

//Questions

const Question= [
  {
    Ques: "Which country was the champion of first criket world cup in 1975?",
    answer: [
      { text: "India", correct: false },
      { text: "West Indies", correct: true },
      { text: "New Zealand", correct: false },
      { text: "England", correct: false },
    ]
  },
  {
    Ques: "The word 'Checkmate' is associated with which sport?",
    answer: [
      { text: "Chess", correct: true },
      { text: "Boxing", correct: false },
      { text: "Wrestling", correct: false },
      { text: "None of the above", correct: false },
    ]
  },
  {
    Ques: "Who is the first cricketer to be awarded the Rajiv Gandhi Khel Ratna Award?",
    answer: [
      { text: "Harbhajan Singh", correct: false },
      { text: "Rahul Dravid", correct: false },
      { text: "Ishant Sharma", correct: false },
      { text: "Sachin Tendulkar", correct: true },
    ]
  },
  {
    Ques: "In which Category 'The Dronachararya Award' is awarded?",
    answer: [
      { text: "Players", correct: false },
      { text: "Sports Journalists", correct: false },
      { text: "Coach", correct: true },
      { text: "Umpires", correct: false },
    ]
  },
  {
    Ques: "Who holds the records for the highest individual score in a single edition of World Cup?",
    answer: [
      { text: "Sachin Tendulkar", correct: false },
      { text: "Virat Kohli", correct: true },
      { text: "Ricky Ponting", correct: false },
      { text: "Vivian Richards", correct: false },
    ]
  },
  {
    Ques: "Where are the headquaters of Swimming federation of India?",
    answer: [
      { text: "Ahemdabad", correct: true },
      { text: "Banglore", correct: false },
      { text: "New Delhi", correct: false },
      { text: "Kolkata", correct: false },
    ]
  },
  {
    Ques: "Which magazine is called 'Bible of Cricket'?",
    answer: [
      { text: "Fairytale", correct: false },
      { text: "Pakhi", correct: false },
      { text: "Wisdon", correct: true },
      { text: "None of them", correct: false },
    ]
  },
  {
    Ques: "Who took fastest 50 wickets in World Cup?",
    answer: [
      { text: "Brett Lee", correct: false },
      { text: "Wasim Akram", correct: false },
      { text: "Abdul Razzaq", correct: false },
      { text: "Mohammad Shammi", correct: true },
    ]
  },
  {
    Ques: "What is the title of the autobiography of major Dhyan Chand?",
    answer: [
      { text: "Goal", correct: true },
      { text: "Hockey Days", correct: false },
      { text: "Hockey-My Life", correct: false },
      { text: "Me and my hockey", correct: false },
    ]
  },
  {
    Ques: "Which professional boxer is nicknamed the 'Kid Dynamite'?",
    answer: [
      { text: "James Toney", correct: false },
      { text: "Joe Frazier", correct: false },
      { text: "Muhammad Ali", correct: false },
      { text: "Mike Tyson", correct: true },
    ]
  },
  {
    Ques: "Name the 1st women cricketer to appear at six cricket World Cup?",
    answer: [
      { text: "Smriti Mandana", correct: false },
      { text: "Mithali Raj", correct: true },
      { text: "HarmanPreet Kaur", correct: false },
      { text: "Jhular Goswami", correct: false },
    ]
  },
  {
    Ques: "'Electra Gold Cup' is associatedwith which sport?",
    answer: [
      { text: "Lawn Tennis", correct: false },
      { text: "Bedminton", correct: false },
      { text: "Table Tennis", correct: true },
      { text: "Football", correct: false },
    ]
  },

  {
    Ques: "Which of the following trophies is related with the game of 'Football'?",
    answer: [
      { text: "Merdeka Cup", correct: true },
      { text: "Everest Cup", correct: false },
      { text: "V C C Cup", correct: false },
      { text: "Bombay Gold Cup", correct: false },
    ]
  },
  {
    Ques: "Where are the headquaters of International Hockey Federation located?",
    answer: [
      { text: "Amsterdam", correct: false },
      { text: "Berlin", correct: false },
      { text: "London", correct: false },
      { text: "Lausanne", correct: true },
    ]
  },
  {
    Ques: "Who has been selected as the first woman president of Indian Olympic Association (IOA)?",
    answer: [
      { text: "Mary Kom", correct: false },
      { text: "P T Usha", correct: true },
      { text: "Anju Bobby George", correct: false },
      { text: "Karnam Malleswari", correct: false },
    ]
  },
];

let currentQuestionIndex = 0;
let timer;
let timerDuration = 30; // Initial timer duration

function startTimer() {
  let timeRemaining = timerDuration;
  document.getElementById('timer').innerText = `${timeRemaining}s`;
  timer = setInterval(function () {
    timeRemaining--;
    document.getElementById('timer').innerText = `${timeRemaining}s`;

    if (timeRemaining <= 0) {
      clearInterval(timer);
      handleWrongAnswer();
    }
  }, 1000);
}

function resetTimer() {
  clearInterval(timer);
  document.getElementById('timer').innerText = '';
}

function displayQuestion() {
  if (currentQuestionIndex < Question.length) {
    const currentQuestion = Question[currentQuestionIndex];

    // Display question if currentQuestion is defined
    if (currentQuestion) {
      document.getElementById('sec1').innerText = currentQuestion.Ques;
      document.getElementById('sec1').style.color = 'white'; // Set text color to white

      // Display answer options
      const answerContainer = document.getElementById('sec2');
      answerContainer.innerHTML = '';
      currentQuestion.answer.forEach((option, index) => {
        const optionBox = document.createElement('div');
        optionBox.classList.add('options');
        optionBox.innerText = option.text;
        optionBox.style.color = 'white'; // Set text color to white
        optionBox.addEventListener('click', function () {
          if (option.correct) {
            handleCorrectAnswer(optionBox);
          } else {
            handleWrongAnswer();
          }
        });
        answerContainer.appendChild(optionBox);
      });

      // Start timer
      startTimer();
    } else {
      console.error('Error: currentQuestion is undefined.');
    }
  } else {
    console.error('Error: No more questions to display.');
  }
}

function handleCorrectAnswer(optionBox) {
  // Stop the timer
  resetTimer();

  // Highlight the correct answer in green
  optionBox.style.backgroundColor = 'green';

  // Wait for a moment to show the correct answer
  setTimeout(() => {
    optionBox.style.backgroundColor = ''; // Reset background color

    // Move to the next question
    currentQuestionIndex++;
    if (currentQuestionIndex < Question.length) {
      // Set the appropriate timer duration for the next set of questions
      if (currentQuestionIndex >= 5 && currentQuestionIndex < 10) {
        timerDuration = 40;
      } else if (currentQuestionIndex >= 10 && currentQuestionIndex < 15) {
        timerDuration = 50;
      }

      displayQuestion();
    } else {
      // All questions have been answered
      window.location.href = 'score.html';
    }
  }, 1000);
}

function handleWrongAnswer() {
  // Stop the timer
  resetTimer();

  // Move to the next question
  currentQuestionIndex++;
  if (currentQuestionIndex < Question.length) {
    displayQuestion();
  } else {
    // All questions have been answered
    window.location.href = 'score.html';
  }
}

// Initial display of the first question
displayQuestion();

let bgSound = new Audio('./assets/bgmusic.mp3');
// let isSoundEnabled = true;

bgSound.play();
bgSound.loop=true;


