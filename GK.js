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

//Queations 

const Question= [
  {
    Ques: "Which song has won the 'Best original song' award at Oscar 2023?",
    answer: [
      { text: "Naacho Naacho", correct: false },
      { text: "Yaara teri meri yaari", correct: false },
      { text: "saami saami", correct: false },
      { text: "Naatu Naatu", correct: true },
    ]
  },
  {
    Ques: "Who is known as the father od indian cinema?",
    answer: [
      { text: "Satyajit Ray", correct: false },
      { text: "V Shantaram", correct: false },
      { text: "Dadasaheb Phalke", correct: true },
      { text: "None of the above", correct: false },
    ]
  },
  {
    Ques: "Cataract is the disease of?",
    answer: [
      { text: "Mouth", correct: false },
      { text: "Eyes", correct: true },
      { text: "Nose", correct: false },
      { text: "Teeth", correct: false },
    ]
  },
  {
    Ques: "The Oscar winning short documentry film 'Smile Pinki'(2008) was directed by which director?",
    answer: [
      { text: "Charlie Chaplin", correct: false },
      { text: "Megan Myler", correct: true },
      { text: "Alfred Hitchcock", correct: false },
      { text: "Michael Curtiz", correct: false },
    ]
  },
  {
    Ques: "Who was the first women chief ministter of India?",
    answer: [
      { text: "Sarojini Naidu", correct: true },
      { text: "Indira Gandhi", correct: false },
      { text: "Sucheta Kriplani", correct: false },
      { text: "Rajkumari Amrita Kaur", correct: false },
    ]
  },
  {
    Ques: "The first speaker of Lok Sabha?",
    answer: [
      { text: "K M Munshi", correct: true },
      { text: "C D Deshmukh", correct: false },
      { text: "G V Mavalankar", correct: false },
      { text: "H J Kania", correct: false },
    ]
  },
  {
    Ques: "Who is known as the 'Iron Man of India'?",
    answer: [
      { text: "Lal Bahadur Shastri", correct: false },
      { text: "Mahatma Gandhi", correct: false },
      { text: "Sardar Vallabhbhai Patel", correct: true },
      { text: " Dr BR Ambedkar", correct: false },
    ]
  },
  {
    Ques: "World Trade Organisation came into existence in?",
    answer: [
      { text: "1992", correct: false },
      { text: "1993", correct: false },
      { text: "1994", correct: false },
      { text: "1995", correct: true },
    ]
  },
  {
    Ques: "Who was the first Indian to win Nobal Prize?",
    answer: [
      { text: "Hargobind Singh Khurana", correct: false },
      { text: "Dr Jagdish Chandra Bose", correct: false },
      { text: "Rabindranath Tagore", correct: true },
      { text: "C v Raman", correct: false },
    ]
  },
  {
    Ques: "Who has written the famous handbook 'Arthshastra'?",
    answer: [
      { text: "Chanakya", correct: true },
      { text: "Kalidas", correct: false },
      { text: "Vatsyayana", correct: false },
      { text: "Harsh Vardhana", correct: false },
    ]
  },
  {
    Ques: "Which field did Amartya Sen win the Nobel Prize in year 1998?",
    answer: [
      { text: "Literature", correct: false },
      { text: "Physics", correct: false },
      { text: "Mathematics", correct: false },
      { text: "Economics", correct: true },
    ]
  },
  {
    Ques: "Who was the person behind the kuka movement?",
    answer: [
      { text: "Kunwar Singh", correct: false },
      { text: "V B Phadke", correct: false },
      { text: "Guru Ram Singh", correct: true },
      { text: "Sir Syed Ahmed Khan", correct: false },
    ]
  },

  {
    Ques: "Which of the following countries is not a member of SAARC?",
    answer: [
      { text: "Maldives", correct: false },
      { text: "Malaysia", correct: false },
      { text: "Bhutan", correct: false },
      { text: "Nepal", correct: false },
    ]
  },
  {
    Ques: "The book titled '1283' illustrates the carrer of which football player?",
    answer: [
      { text: "Pele", correct: true },
      { text: "Ronaldo", correct: false },
      { text: "Messi", correct: false },
      { text: "Neymaar", correct: false },
    ]
  },
  {
    Ques: "Who wrote down the epic Mahabharata when Ved Vyas Ji was dictating?",
    answer: [
      { text: "Lord Shiv", correct: false },
      { text: "Lord Ganesh", correct: true },
      { text: "Vishvakarma", correct: false },
      { text: "Lord Narada", correct: false },
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
      document.getElementById('sec1').style.color = 'white'; 

      // Display answer options
      const answerContainer = document.getElementById('sec2');
      answerContainer.innerHTML = '';
      currentQuestion.answer.forEach((option, index) => {
        const optionBox = document.createElement('div');
        optionBox.classList.add('options');
        optionBox.innerText = option.text;
        optionBox.style.color = 'white'; 
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
let score=0;
function handleCorrectAnswer(optionBox) {
  // Stop the timer
  resetTimer();

  // Highlight the correct answer in green
  optionBox.style.backgroundColor = 'green';
  score+=5;
  console.log(score)

  localStorage.setItem("points","score");


    
  localStorage.setItem("nickname","score");

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




