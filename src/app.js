/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector("#the-excuse").innerHTML = generatexcuse();
  console.log("Hello Rigo from the console");
};
let generatexcuse = () => {
  let who = ["un gorila", "un loro", "mi abuela", "Spiderman"];
  let action = [" pintó ", " se comió ", " tiró ", " rompió "];
  let what = [" mis deberes ", " mi ordenador ", " mi móvil "];
  let when = [
    " mientras dormía ",
    " mientras jugaba al fútbol ",
    " mientras estaba surfeando "
  ];

  let whoIndex = Math.floor(Math.random() * who.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let whatIndex = Math.floor(Math.random() * what.length);
  let whenIndex = Math.floor(Math.random() * when.length);

  return (
    who[whoIndex] +
    "" +
    action[actionIndex] +
    "" +
    what[whatIndex] +
    "" +
    when[whenIndex] +
    ""
  );
};
