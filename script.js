let count = 0;
let round = 0;
let target = 0;

const countSpan = document.getElementById("count");
const roundSpan = document.getElementById("round");
const targetInput = document.getElementById("targetInput");
const tapArea = document.getElementById("tapArea");
const alarm = document.getElementById("alarmSound");

// Tap to count
tapArea.addEventListener("click", () => {
  count++;

  if (count === 108) {
    count = 0;
    round++;
    roundSpan.textContent = round;

    // Check goal
    target = parseInt(targetInput.value);

    if (target && round === target) {

  // 🔒 Disable tap area
  tapArea.style.pointerEvents = "none";
  tapArea.style.opacity = "0.5"; // optional visual feedback

  // 🔊 Play alarm
  alarm.currentTime = 0;
  alarm.play();

  // ⏱ Stop after 4 seconds
  setTimeout(() => {
    alarm.pause();
    alarm.currentTime = 0;
  }, 6000);
}
     
  }

  countSpan.textContent = count;
});

// Reset
document.getElementById("resetBtn").addEventListener("click", () => {
  count = 0;
  round = 0;
  countSpan.textContent = 0;
  roundSpan.textContent = 0;
});