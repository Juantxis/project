/* eslint-disable */

import "./style.css";
var el = document.getElementById("generaCarta");
el.addEventListener("click", crearCarta, false);

function crearCarta(event) {
  console.clear();
  const NUMERO = document.getElementById("numero");
  const PALO_ARRIBA = document.getElementById("paloArriba");
  const PALO_ABAJO = document.getElementById("paloAbajo");
  //Genera el número aleatorio
  let losNumeros = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
  let eligeNumero = Math.floor(Math.random() * losNumeros.length);
  NUMERO.innerHTML = losNumeros[eligeNumero];

  let palos = [
    '<img src="assets/img/treboles.png">',
    '<img src="assets/img/picas.png">',
    '<img src="assets/img/corazon.png">',
    '<img src="assets/img/diamante.png">'
  ];
  let eligePalo = Math.floor(Math.random() * palos.length);

  PALO_ARRIBA.innerHTML = palos[eligePalo];
  PALO_ABAJO.innerHTML = palos[eligePalo];
  // si los palos son diamantes o corazones cambia el color a rojo
  if (palos[eligePalo] === "♥" || palos[eligePalo] === "♦") {
    PALO_ARRIBA.style.color = "red";
    PALO_ABAJO.style.color = "red";
    NUMERO.style.color = "red";
  }
}
