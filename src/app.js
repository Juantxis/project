/* eslint-disable */

import { Carousel } from "bootstrap";
import "./style.css";

// al pulsar el botón se genera la carta
var CREA_CARTA = document.getElementById("generaCarta");
  

var id_intervalo = 0; //declaro id_intervalo para poder actuar sobre él
//timer de 10 segundos

var CUENTA_ATRAS = document.getElementById("cuentaAtras");
var BT_PAUSA = document.getElementById("pausaIntervalo");

var NUMERO = document.getElementById("numero");
var PALO_ARRIBA = document.getElementById("paloArriba");
var PALO_ABAJO = document.getElementById("paloAbajo");

CREA_CARTA.addEventListener("click", crearCarta, false);
BT_PAUSA.addEventListener("click", paraIntervalo, false);

let cuenta = function() {
  //crear intervalo
  BT_PAUSA.innerHTML = '<i class="fa-solid fa-stop"></i>';
  let counter = 10;
  id_intervalo = setInterval(function() {
    if (counter == 0) {
      clearInterval(id_intervalo);
      CUENTA_ATRAS.innerHTML = ": 10";
      crearCarta();
      cuenta();
    } else {
      counter = counter - 1;
      CUENTA_ATRAS.innerHTML = ": 0" + counter;
    }
  }, 1000);
};

//parar intervalo
let paraIntervalo = function() {
  if (id_intervalo) {
    CUENTA_ATRAS.innerHTML = ": 10";
    BT_PAUSA.innerHTML = '<i class="fa-solid fa-play"></i>';
    clearInterval(id_intervalo);
    id_intervalo = false;
  } else {
    cuenta();
  }
};



function crearCarta(event) {
  //console.clear();
  
  //Genera el número aleatorio
  let losNumeros = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
  let eligeNumero = Math.floor(Math.random() * losNumeros.length);
  NUMERO.innerHTML = losNumeros[eligeNumero];
  // genera los palos aleatorios
  let palos = [
    '<img src="src/assets/img/treboles.png" width="30">',
    '<img src="src/assets/img/picas.png" width="30">',
    '<img src="src/assets/img/corazon.png" width="30">',
    '<img src="src/assets/img/diamante.png" width="30">'
  ];
  let eligePalo = Math.floor(Math.random() * palos.length);

  PALO_ARRIBA.innerHTML = palos[eligePalo];
  PALO_ABAJO.innerHTML = palos[eligePalo];
  // si los palos son diamantes o corazones cambia el color a rojo
  if (
    palos[eligePalo] === '<img src="src/assets/img/corazon.png" width="30">' ||
    palos[eligePalo] === '<img src="src/assets/img/diamante.png" width="30">'
  ) {
    NUMERO.style.color = "red";
  } else {
    NUMERO.style.color = "black";
  }
}

window.onload = cuenta();
