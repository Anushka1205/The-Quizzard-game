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
    Ques: "Who invented the first functional telephone?",
    answer: [
      { text: "Albert Einstein", correct: false },
      { text: "Nikola Testa", correct: false },
      { text: "Thomas Alva Edison", correct: false },
      { text: "Alexander Graham Bell", correct: true },
    ]
  },
  {
    Ques: "Which cell organelle is also called the powerhouse of the cell?",
    answer: [
      { text: "Ribosome", correct: false },
      { text: "Endoplasmic Recticulam", correct: false },
      { text: "Mitochondria", correct: true },
      { text: "Cell Membrane", correct: false },
    ]
  },
  {
    Ques: "Which of the following in NOT a form of Carbon?",
    answer: [
      { text: "Diamond", correct: false },
      { text: "Perrite", correct: true },
      { text: "Graphite", correct: false },
      { text: "Amorphous Carbon", correct: false },
    ]
  },
  {
    Ques: "Which is the lightest element in the periodic table?",
    answer: [
      { text: "Helium", correct: false },
      { text: "Carbon", correct: false },
      { text: "Nitrogen", correct: false },
      { text: "Hydrogen", correct: true },
    ]
  },
  {
    Ques: "Which nutrient plays an essential role in muscle-building?",
    answer: [
      { text: "Protein", correct: true },
      { text: "Carbohydrate", correct: false },
      { text: "Iron", correct: false },
      { text: "Fat", correct: false },
    ]
  },
  {
    Ques: "Spermology in the study of?",
    answer: [
      { text: "Seed", correct: true },
      { text: "Leaf", correct: false },
      { text: "Fruit", correct: false },
      { text: "Pollen Grain", correct: false },
    ]
  },
  {
    Ques: "The gas filledin electic bulb is?",
    answer: [
      { text: "Oxygen", correct: false },
      { text: "Hydrogen", correct: false },
      { text: "Nitrogen", correct: true },
      { text: "Carbon Dioxide", correct: false },
    ]
  },
  {
    Ques: "Which of the following is used in pencils?",
    answer: [
      { text: "Charcole", correct: false },
      { text: "Cilicon", correct: false },
      { text: "Iron", correct: false },
      { text: "Graphite", correct: true },
    ]
  },
  {
    Ques: "Who gave the theory of relativity?",
    answer: [
      { text: "Isaac Newton", correct: false },
      { text: "Archimedes", correct: false },
      { text: "Albert Einstien", correct: true },
      { text: "Galileo Galilei", correct: false },
    ]
  },
  {
    Ques: "Which part of brain maintains posture and balance of human body?",
    answer: [
      { text: "Cerebrum", correct: true },
      { text: "Pons", correct: false },
      { text: "Cerebellum", correct: false },
      { text: "Medulla", correct: false },
    ]
  },
  {
    Ques: "Why do plants need nitrate ions?",
    answer: [
      { text: "To make chlorophyll", correct: false },
      { text: "To make fatty acids", correct: false },
      { text: "To make starch for storage", correct: false },
      { text: "To make protiens", correct: true },
    ]
  },
  {
    Ques: "Which of the following is a non metal that remains liquid at room temprature?",
    answer: [
      { text: "Phosphorus", correct: false },
      { text: "Clorine", correct: false },
      { text: "Bromine", correct: true },
      { text: "Helium", correct: false },
    ]
  },

  {
    Ques: "Which of the following trees shed their leaves once in a year?",
    answer: [
      { text: "Deciduous Trees", correct: true },
      { text: "Coniferous Trees", correct: false },
      { text: "Evergreen Trees", correct: false },
      { text: "Both a & b", correct: false },
    ]
  },
  {
    Ques: "The wire of flesh bulbs is made up of?",
    answer: [
      { text: "Ba", correct: false },
      { text: "Cu", correct: false },
      { text: "Ag", correct: false },
      { text: "Mg", correct: true },
    ]
  },
  {
    Ques: "Brine refers to?",
    answer: [
      { text: "Sweet water", correct: false },
      { text: "Salt water", correct: true },
      { text: "Pure water", correct: false },
      { text: "Starch water", correct: false },
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



