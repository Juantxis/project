/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function newCard() {
  let suit = ["♦", "♥", "♠", "♣"];
  let numbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "k",
    "Q"
  ];
  let indexSuit = Math.floor(Math.random() * suit.length);
  let indexNumbers = Math.floor(Math.random() * numbers.length);

  let top = document.querySelector("#top");
  let end = document.querySelector("#end");
  let number = document.querySelector("#number");

  top.innerHTML = suit[indexSuit];
  end.innerHTML = suit[indexSuit];
  number.innerHTML = numbers[indexNumbers];

  let currentClass =
    suit[indexSuit] == "♦" || suit[indexSuit] == "♥"
      ? "text-danger"
      : "text-dark";
  top.className = currentClass;
  end.className = currentClass;
  number.className = currentClass;
}

window.onload = function() {
  newCard();
};

let button = document.querySelector("#button");
button.addEventListener("click", () => newCard());
