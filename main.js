// ALL ACCORDION BUTTONS
const keys = document.querySelectorAll(".key");
const blackDiv = document.querySelectorAll(".key.black");
const whiteDiv = document.querySelectorAll(".key.white");
const bassDiv = document.querySelectorAll(".key.bass");
const accordDiv = document.querySelectorAll(".key.bass.accord");

// COMPUTER KEYBOARD (BOTH 'HANDS')
const whiteKeyboard = ["z", "x", "c", "v", "b", "n", "m", ","];
const blackKeyboard = ["s", "d", "g", "h", "j"];
const bassKeyboard = ["q", "1", "3"];
const accordKeyboard = ["w", "2", "4"];

// GET ALL KEYS AND PLAY NOTE ON PARTICULAR KEY
keys.forEach((key) => key.addEventListener("click", () => play(key)));

const play = (key) => {
  const particularNote = document.getElementById(key.dataset.note);
  particularNote.currentTime = 0.15;
  particularNote.play();
  key.classList.add("press");
  particularNote.addEventListener("ended", () => key.classList.remove("press"));
};

document.addEventListener("keydown", (e) => {
  const note = e.key;
  const whiteIndex = whiteKeyboard.indexOf(note);
  const blackIndex = blackKeyboard.indexOf(note);
  const bassIndex = bassKeyboard.indexOf(note);
  const accordIndex = accordKeyboard.indexOf(note);

  if (whiteIndex > -1) play(whiteDiv[whiteIndex]);
  if (blackIndex > -1) play(blackDiv[blackIndex]);
  if (bassIndex > -1) play(bassDiv[bassIndex]);
  if (accordIndex > -1) play(accordDiv[accordIndex]);
});

const toggleBtn = document.querySelector(".legend-toggle");
const legend = document.querySelector(".legend-text");
let flag = false;
toggleBtn.addEventListener("click", () => {
  legend.classList.toggle("active");
  flag = !flag;
});
