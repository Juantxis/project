/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

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

const obtenerAleatorio = () => {
  // Genera un número aleatorio entre 0 (incluido) y 1 (excluido)
  var numeroAleatorio = Math.random();

  // Multiplica el número aleatorio por 4 para obtener un número entre 0 (incluido) y 4 (excluido)
  numeroAleatorio *= 4;

  // Utiliza la función Math.floor() para redondear hacia abajo y obtener un número entero entre 0 y 3
  var numeroEntero = Math.floor(numeroAleatorio);

  console.log(numeroEntero); // Esto mostrará un número aleatorio entre 0 y 3 en la consola
  return numeroEntero;
};

window.onload = function() {
  let result = [
    who[obtenerAleatorio()],
    action[obtenerAleatorio()],
    what[obtenerAleatorio()],
    when[obtenerAleatorio()]
  ].join(" ");

  console.log(result);

  document.getElementById("excuse").textContent = result;
};
