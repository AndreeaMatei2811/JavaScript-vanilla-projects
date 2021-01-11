"use strict";

// console.log(document.querySelector(".message").textContent);

// document.querySelector(".message").textContent = "Correct number";
// console.log(document.querySelector(".message").textContent);

// document.querySelector(".number").textContent = 13;
// document.querySelector(".score").textContent = 10;

// document.querySelector(".guess").value = 23;
// console.log(document.querySelector(".guess").value);

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  console.log(guess, typeof guess);

  if (!guess) {
    displayMessage("No number!");
  } else if (guess === secretNumber) {
    displayMessage("Correct number!");
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#d0e9c8";
    document.querySelector(".number").style.width = "30rem";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        guess > secretNumber ? "Number is to high!" : "Number is to low!"
      );
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("You lost the game!");
      document.querySelector(".score").textContent = 0;
    }
  }
  //   else if (guess > secretNumber) {
  //     if (score > 1) {
  //       (document.querySelector(".message").textContent = "Number is to high!"),
  //         score--;
  //       document.querySelector(".score").textContent = score;
  //     } else {
  //       document.querySelector(".message").textContent = "You lost the game!";
  //       document.querySelector(".score").textContent = 0;
  //     }
  //   } else if (guess < secretNumber) {
  //     if (score > 1) {
  //       document.querySelector(".message").textContent = "Number is to low!";
  //       score--;
  //       document.querySelector(".score").textContent = score;
  //     } else {
  //       document.querySelector(".message").textContent = "You lost the game!";
  //       document.querySelector(".score").textContent = 0;
  //     }
  //   }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  displayMessage("Start guessing...");
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".guess").value = "";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
