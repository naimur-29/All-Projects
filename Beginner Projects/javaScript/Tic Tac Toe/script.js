"use strict";

const btnSwitch = document.querySelectorAll(".btn");
const textSpans = document.querySelectorAll(".text-inside");

for (let i = 0; i < 9; i++) {
  btnSwitch[i].addEventListener("click", function () {
    textSpans[i].textContent =
      textSpans[i].textContent === "X" || textSpans[i].textContent === ""
        ? (textSpans[i].textContent = "O")
        : (textSpans[i].textContent = "X");
  });
}
