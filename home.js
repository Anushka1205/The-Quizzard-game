const instbutton = document.getElementById("inst-btn");

instbutton.onclick = () => {
  location.href = "./instructions.html";
};

const srtbutton = document.getElementById("start-btn");
srtbutton.onclick = () => {
  location.href = "./select.html";
};

//Background music

let bgSound = new Audio('./assets/bgmusic.mp3');
// let isSoundEnabled = true;
bgSound.play();
bgSound.loop=true;


