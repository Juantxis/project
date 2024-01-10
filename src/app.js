/* eslint-disable */
/*
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
*/

window.onload = function() {
  //declaramos arrays
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = ["before the class","right on time","when I finished","during my lunch","while I was praying"];
  //Declaramos una función que se encargará de crear un  array con numeros aleatorios.
  function generateRandomNumbers(who, action, what, when) {
    let randomWho = parseInt(Math.random() * who.length);
    let randomAction = parseInt(Math.random() * action.length);
    let randomWhat = parseInt(Math.random() * what.length);
    let randomWhen = parseInt(Math.random() * when.length);
    return [randomWho, randomAction, randomWhat, randomWhen];
  }
  //Declaramos un Array para contener los números aleatorios
  let arrayAleatoryNumbers = generateRandomNumbers(who, action, what, when);
  // Concatenamos cadenas
  let myText = who[arrayAleatoryNumbers[0]]+" "+action[arrayAleatoryNumbers[1]]+" "+what[arrayAleatoryNumbers[2]]+" "+when[arrayAleatoryNumbers[3]];
   // Imprimimos en el index
  document.getElementById("excuse").innerHTML = myText;
};
