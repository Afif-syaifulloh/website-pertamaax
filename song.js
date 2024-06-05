const audio = document.getElementById("audio");
const playBtn = document.getElementById("play-btn");
const pauseBtn = document.getElementById("pause-btn");
const repeatBtn = document.getElementById("repeat-btn");

let isPlaying = false;
let isRepeating = false;

playBtn.addEventListener("click", () => {
  if (!isPlaying) {
    audio.play();
    isPlaying = true;
    playBtn.textContent = "Pause";
  } else {
    audio.pause();
    isPlaying = false;
    playBtn.textContent = "Play";
  }
});

pauseBtn.addEventListener("click", () => {
  audio.pause();
  isPlaying = false;
  playBtn.textContent = "Play";
});

repeatBtn.addEventListener("click", () => {
  if (!isRepeating) {
    audio.loop = true;
    isRepeating = true;
    repeatBtn.textContent = "Repeat Off";
  } else {
    audio.loop = false;
    isRepeating = false;
    repeatBtn.textContent = "Repeat";
  }
});

audio.addEventListener("ended", () => {
  if (isRepeating) {
    audio.play();
  } else {
    isPlaying = false;
    playBtn.textContent = "Play";
  }
});
