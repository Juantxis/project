/* eslint-disable */

import { Carousel } from "bootstrap";
import "./style.css";

let iniciaIntervalo = function() {
  //crear intervalo
  BT_PARA_INTERVALO.innerHTML = '<i class="fa-solid fa-stop"></i>';
  let counter = 10;
  id_intervalo = setInterval(function() {
    if (counter == 0) {
      clearInterval(id_intervalo);
      CUENTA_ATRAS.innerHTML = ": 10";
      crearCarta();
      iniciaIntervalo();
    } else {
      counter = counter - 1;
      CUENTA_ATRAS.innerHTML = ": 0" + counter;
    }
  }, 1000);
};

//parar intervalo
let paraIntervalo = function() {
  if (id_intervalo) {
    // si ya existe el intervalo
    CUENTA_ATRAS.innerHTML = ": 10";
    BT_PARA_INTERVALO.innerHTML = '<i class="fa-solid fa-play"></i>';
    clearInterval(id_intervalo);
    id_intervalo = false;
  } else {
    iniciaIntervalo();
  }
};
// funcion para crear la carta
function crearCarta(event) {
  //console.clear();

  //Genera el número aleatorio
  let losNumeros = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
  let eligeNumero = Math.floor(Math.random() * losNumeros.length);

  // genera los palos aleatorios
  let palos = [
    '<img src="src/assets/img/treboles.png" width="30">',
    '<img src="src/assets/img/picas.png" width="30">',
    '<img src="src/assets/img/corazon.png" width="30">',
    '<img src="src/assets/img/diamante.png" width="30">'
  ];
  let eligePalo = Math.floor(Math.random() * palos.length);

  // si los palos son diamantes o corazones cambia el estilo del texto a rojo
  if (
    palos[eligePalo] === '<img src="src/assets/img/corazon.png" width="30">' ||
    palos[eligePalo] === '<img src="src/assets/img/diamante.png" width="30">'
  ) {
    NUMERO.style.color = "red";
  } else {
    NUMERO.style.color = "black";
  }

  // mete los valores aleatorios en los div correspondientes
  PALO_ARRIBA.innerHTML = palos[eligePalo];
  PALO_ABAJO.innerHTML = palos[eligePalo];
  NUMERO.innerHTML = losNumeros[eligeNumero];
}
var id_intervalo = 0; //declaro id_intervalo para poder actuar sobre él

// coger ids
let CREA_CARTA = document.getElementById("generaCarta");
let CUENTA_ATRAS = document.getElementById("cuentaAtras");
let BT_PARA_INTERVALO = document.getElementById("paraIntervalo");

let NUMERO = document.getElementById("numero");
let PALO_ARRIBA = document.getElementById("paloArriba");
let PALO_ABAJO = document.getElementById("paloAbajo");
//botones
CREA_CARTA.addEventListener("click", crearCarta, false);
BT_PARA_INTERVALO.addEventListener("click", paraIntervalo, false);

window.onload = iniciaIntervalo();
