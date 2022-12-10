/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const numeros = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
const simbolos = ["&hearts;", "&spades;", "&clubs;", "&diams;"];

document.getElementById("arriba").innerHTML = "&hearts;";
document.getElementById("abajo").innerHTML = "&hearts;";
document.getElementById("numero").innerHTML = "7";

function numeroaleatorio() {
  let aleatorio = Math.floor(Math.random() * 12);
  return numeros[aleatorio];
}

function simboloaleatorio() {
  let aleatorio = Math.floor(Math.random() * 3);
  return simbolos[aleatorio];
}

function intercambio() {
  let simbolo = simboloaleatorio();

  document.getElementById("abajo").innerHTML = simbolo;
  document.getElementById("arriba").innerHTML = simbolo;
  let numero = numeroaleatorio();
  document.getElementById("numero").innerHTML = numero;
}

setInterval(intercambio(), 10000);

console.log(numeroaleatorio());
console.log(simboloaleatorio());
