const button = document.getElementById("back-btn");

button.onclick = () => {
  location.href = "./home.html";
};

//Background music

let bgSound = new Audio('./assets/bgmusic.mp3');

bgSound.play();
bgSound.loop=true;