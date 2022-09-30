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
    '<img width="30" class="w_img" src="src/assets/img/treboles.png" >',
    '<img width="30" class="w_img" src="src/assets/img/picas.png" >',
    '<img width="30" class="w_img" src="src/assets/img/corazon.png" >',
    '<img width="30" class="w_img" src="src/assets/img/diamante.png" >'
  ];
  let eligePalo = Math.floor(Math.random() * palos.length);

  // si los palos son diamantes o corazones cambia el estilo del texto a rojo
  if (
    palos[eligePalo] ===
      '<img width="30" class="w_img" src="src/assets/img/corazon.png" >' ||
    palos[eligePalo] ===
      '<img width="30" class="w_img" src="src/assets/img/diamante.png" >'
  ) {
    NUMERO.style.color = "red";
  } else {
    NUMERO.style.color = "black";
  }

  // mete los valores aleatorios en los div correspondientes
  PALO_ARRIBA.innerHTML = palos[eligePalo];
  PALO_ABAJO.innerHTML = palos[eligePalo];
  NUMERO.innerHTML = losNumeros[eligeNumero];
  // coger las imagenes con class
  let CLASS_IMGS = document.querySelectorAll(".w_img");
  CLASS_IMGS.forEach(function(laImagen) {
    laImagen.setAttribute("width", "30px");
    laImagen.setAttribute("height", "30px");
  });
}
// cambio de medidas
function cambiaMedidas() {
  MEDIDAS_CARTA.style.height = CAMBIA_ALTO.value + "px";
  MEDIDAS_CARTA.style.width = CAMBIA_ANCHO.value + "px";
  let CLASS_IMGS = document.querySelectorAll(".w_img");
  CLASS_IMGS.forEach(function(laImagen) {
    laImagen.setAttribute("width", "30px");
    laImagen.setAttribute("height", "30px");
  });
}

var id_intervalo = 0; //declaro id_intervalo para poder actuar sobre él

// coger ids botones
const BT_CREAR_CARTA = document.getElementById("generaCarta");
const BT_PARA_INTERVALO = document.getElementById("paraIntervalo");
const BT_MEDIDAS = document.getElementById("cambiaMedida");
// coger ids inputs medidas
const MEDIDAS_CARTA = document.getElementById("cuerpoCarta");
const CAMBIA_ALTO = document.getElementById("alto_carta");
const CAMBIA_ANCHO = document.getElementById("ancho_carta");

// coger id elemento setInterval
const CUENTA_ATRAS = document.getElementById("cuentaAtras");
// coger ids elementos carta
const NUMERO = document.getElementById("numero");
const PALO_ARRIBA = document.getElementById("paloArriba");
const PALO_ABAJO = document.getElementById("paloAbajo");
// eventos para botones
BT_CREAR_CARTA.addEventListener("click", crearCarta, false);
BT_PARA_INTERVALO.addEventListener("click", paraIntervalo, false);
BT_MEDIDAS.addEventListener("click", cambiaMedidas, false);

window.onload = iniciaIntervalo();
