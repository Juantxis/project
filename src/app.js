/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const HandleBoton = e => {
  console.log("me cliceaste");
  location.reload();
  //console.log(e);
  return;
};
window.onload = function() {
  //write your code here
  // console.log("Hello Rigo from the console!");
  //selencionamos el body y cambiamos el color de fondo
  let body = document.querySelector("body");

  body.classList.add("bg", "bg-success");
  //console.log(body);
  //nuevo div
  let nuevoDiv = document.createElement("DIV");
  let app = document.querySelector("#app");
  nuevoDiv.classList.add("container", "bg", "bg-light");
  nuevoDiv.innerHTML = `<div class="row symbol heading">fila 1</div><div class="row number">fila 2</div><div class="row symbol reverse">fila 3</div>`;
  app.appendChild(nuevoDiv);

  let numeros = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", " Q", " K"];
  // console.log(numeros[2]);
  let numeroAleatorio = Math.floor(Math.random() * numeros.length);
  //console.log("numeroAleatorio", numeros[numeroAleatorio]);
  let fila2 = document.querySelector(".number");
  fila2.innerHTML = `${numeros[numeroAleatorio]}`;
  let suit = [
    { suit: "♥", color: "red" },
    { suit: "♦ ", color: "red" },
    { suit: " ♠", color: "black" },
    { suit: " ♣", color: "black" }
  ];
  let suitAleatoria = Math.floor(Math.random() * suit.length);
  // console.log(suit[suitAleatoria]);
  let fila1 = document.querySelector(".heading");

  fila1.innerHTML = `${suit[suitAleatoria]["suit"]}`;

  let fila3 = document.querySelector(".reverse");

  fila3.innerHTML = `${suit[suitAleatoria]["suit"]}`;

  fila1.style.color = suit[suitAleatoria]["color"];

  fila3.style.color = suit[suitAleatoria]["color"];

  fila2.classList.add("justify-content-center");

  let boton = document.createElement("button");
  let textBoton = document.createTextNode("Click");
  boton.appendChild(textBoton);
  boton.addEventListener("click", e => HandleBoton(e));

  body.appendChild(boton);
};
