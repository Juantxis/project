/* eslint-disable */
import "bootstrap";
import "./style.css";
window.onload = function() {
  //write your code here
  let p = document.querySelector("#excuse");

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

  let whoRandomNumber = Math.floor(Math.random() * who.length);
  let actionRandomNumber = Math.floor(Math.random() * action.length);
  let whatRandomNumber = Math.floor(Math.random() * what.length);
  let whenRandomNumber = Math.floor(Math.random() * when.length);

  p.innerHTML = `${who[whoRandomNumber]} ${action[actionRandomNumber]} ${what[whatRandomNumber]} ${when[whenRandomNumber]}
  `;
};
