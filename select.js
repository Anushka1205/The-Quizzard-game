const bckbutton = document.getElementById("home");

bckbutton.onclick = () => {
  location.href = "./home.html";
};

const sciencebutton = document.getElementById("science");

sciencebutton.onclick = () => {
  location.href = "./science.html";
};

const gkbutton = document.getElementById("GK");

gkbutton.onclick = () => {
  location.href = "./GK.html";
};

const sportsbutton = document.getElementById("Sports");

sportsbutton.onclick = () => {
  location.href = "./Sports.html";
};

//Background music

let bgSound = new Audio('./assets/bgmusic.mp3');

bgSound.play();
bgSound.loop=true;
