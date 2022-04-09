/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = ["el perro", "mi abuela", "su tortuga", "mi pajaro"];
let action = ["se comio", "perdio", "rompio", "destroso"];
let what = ["mi carro", "mi tarea", "mi vestido", "mi dignidad"];
let when = [
  "antes de la clase",
  "justo ahora",
  "cuando termine",
  "en mi almuerzo",
  "cuando estaba jugando"
];

function selectRandom(arr) {
  let random = ~~(Math.random() * arr.length);
  return arr[random];
}

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  let result = `${selectRandom(who)} ${selectRandom(action)} ${selectRandom(
    what
  )} ${selectRandom(when)}`;
  let element = document.getElementById("excuse");
  element.innerHTML = result;
};
