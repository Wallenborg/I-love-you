const letters = ["I", "L", "O", "V", "E", "Y", "O", "U"];
const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;
const delay = 1000;

letters.forEach((letter, index) => {
  const span = document.createElement("span");
  span.classList.add("letter");
  span.textContent = letter;
  document.body.appendChild(span);

  moveLetter(span);

  setInterval(() => {
    moveLetter(span);
  }, delay + index * 500);
});

function moveLetter(letterElement) {
  const x = Math.random() * (screenWidth - 100);
  const y = Math.random() * (screenHeight - 100);

  letterElement.style.left = `${x}px`;
  letterElement.style.top = `${y}px`;
}
