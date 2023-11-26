const instbutton = document.getElementById("inst-btn");

instbutton.onclick = () => {
  location.href = "./instructions.html";
};

const srtbutton = document.getElementById("start-btn");
srtbutton.onclick = () => {
  location.href = "./select.html";
};

let bgSound = new Audio('./assets/bgmusic.mp3');
// let isSoundEnabled = true;

bgSound.play();
bgSound.loop=true;



// function toggleSound() {
//   isSoundEnabled = !isSoundEnabled;

//   // Update the button text or icon based on the sound state
//   const soundToggleBtn = document.getElementById('set-btn');
//   soundToggleBtn.textContent = isSoundEnabled ? 'Mute Sound' : 'Unmute Sound';
// }

// document.getElementById('set-btn').addEventListener('click', toggleSound);
    

