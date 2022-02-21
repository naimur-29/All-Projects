let bgColor = "FFFFFF";
let previousColor;

const randButton = document.querySelector(".randBtn");
const container = document.querySelector(".container");
let direction = "right";
let percentage = 100;

randButton.addEventListener("click", () => {
  if (percentage >= 100) {
    let sleep = 1;
    percentage = 1;
    direction === "right" ? (direction = "left") : (direction = "right");
    previousColor = bgColor;
    bgColor = ((Math.random() * 0xffffff) << 0).toString(16);
    randButton.textContent = `#${bgColor}`;
    randButton.style.color = `#${bgColor}`;

    const myInterval = setInterval(() => {
      if (percentage >= 100) clearInterval(myInterval);
      percentage += 0.5;
      container.style.background = `linear-gradient(to ${direction}, #${bgColor} ${percentage}%, #${previousColor} ${percentage}%)`;
    }, sleep);
  }
});
