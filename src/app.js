/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  let who1 = who[Math.floor(Math.random() * who.length)];
  let action2 = action[Math.floor(Math.random() * action.length)];
  let what3 = what[Math.floor(Math.random() * what.length)];
  let when4 = when[Math.floor(Math.random() * when.length)];

  document.querySelector("#excuse").innerHTML =
    who1 + " " + action2 + " " + what3 + " " + when4;
};

console.log("Hello my name is rigo!");
