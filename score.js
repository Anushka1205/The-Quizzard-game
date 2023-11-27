const frontbutton = document.getElementById("front-btn");

frontbutton.onclick = () => {
  location.href = "./home.html";
};

let bgSound = new Audio('./assets/bgmusic.mp3');
// let isSoundEnabled = true;
function play(){
bgSound.play();
bgSound.loop=true;
}

// Total score
const userScore = 75; 

//Local storage
const store = localStorage.getItem("points");

// Get the elements
const pointsElement = document.getElementById('points');
const performanceElement = document.getElementById('performance');

// // Display the user's score
pointsElement.innerHTML = `<h1>Your Score: ${store}</h1>`;


// Determine the message based on the score
let message = '';

if (store === userScore) {
    message = "Congratulations! You've scored a perfect 75!";
} else if (store >= userScore) {
    message = "Well Played! You've scored 55 or more. Great job!";
} else {
    message = "Try again. You've scored less than 55.";
}
console.log(message,performanceElement)

// Display the message
performanceElement.innerHTML = `<h1>${message} 😊🎊</h1>`;



