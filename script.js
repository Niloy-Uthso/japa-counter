let count = 0;
let round = 0;
let goal = 0;

const countSpan = document.getElementById('count');
const roundSpan = document.getElementById('round');
const goalSpan = document.getElementById('goal');

document.getElementById('countBtn').addEventListener('click', () => {
  count++;
  if (count > 100) {
    count = 1;
    round++;
    if (round % 10 === 0) {
      goal++;
      goalSpan.textContent = goal;
    }
    roundSpan.textContent = round;
  }
  countSpan.textContent = count;
});

document.getElementById('resetBtn').addEventListener('click', () => {
  count = 0;
  round = 0;
  goal = 0;
  countSpan.textContent = count;
  roundSpan.textContent = round;
  goalSpan.textContent = goal;
});
