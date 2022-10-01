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
//funcion comprueba medida
let comprobar_medida = function(clase) {
  const comprueba_medida = document.querySelector(clase);
  let hay_width = comprueba_medida.getAttribute("width");
  let hay_height = comprueba_medida.getAttribute("height");
  if (hay_width===30) {
    return '<img width="30" height="30"';
  } else {
    return '<img width="' + hay_width + '" height="' + hay_height + '"';
  }
};
// funcion para crear la carta
function crearCarta(event) {
  //Genera el número aleatorio
  let losNumeros = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
  let eligeNumero = Math.floor(Math.random() * losNumeros.length);

  let crea_img = comprobar_medida(".w_img");
  const palos = [
    crea_img + '  class="w_img" src="src/assets/img/treboles.png" >',
    crea_img + '  class="w_img" src="src/assets/img/picas.png" >',
    crea_img + '  class="w_img" src="src/assets/img/corazon.png" >',
    crea_img + '  class="w_img" src="src/assets/img/diamante.png" >'
  ];
  let eligePalo = Math.floor(Math.random() * palos.length);

  const CLASS_IMGS = document.querySelectorAll(".w_img");
  CLASS_IMGS.forEach(function(laImagen) {
    let conserva_ancho = laImagen.getAttribute("width");
    let conserva_alto = laImagen.getAttribute("height");
    let conserva_fuente = laImagen.style.fontSize;
    medidasImagenes(conserva_alto, conserva_ancho, conserva_fuente);
  });

  // si los palos son diamantes o corazones cambia el estilo del texto a rojo
  if (
    palos[eligePalo].includes("corazon") ||
    palos[eligePalo].includes("diamante")
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
// cambio de medidas de la CARTA

function cambiaMedidas() {
  //verificamos las medidas que nos pasan
  let el_alto = CAMBIA_ALTO.value;
  let el_ancho = CAMBIA_ANCHO.value;

  if (el_alto < 200 || el_ancho < 150) {
    // si no coinciden los valores error
    //creamos un nuevo modal de errores con el js de bootstrap
    let myModal = new bootstrap.Modal(
      document.getElementById("modal_error"),
      true
    );
    //mostrar el modal
    myModal.show();
  } else {
    //calcular tamaño nuevo de imagen
    let medida_img = Math.round((el_ancho / 150) * 30);
    let medida_fuente = Math.round((el_ancho / 150) * 70);
    //si no hay error en los valores cambiamos las medidas
    MEDIDAS_CARTA.style.height = el_alto + "px";
    MEDIDAS_CARTA.style.width = el_ancho + "px";

    //retocar imagen y fuente
    medidasImagenes(medida_img, medida_img, medida_fuente);
  }
}
// enviar a consola aConsola(argumento);
function aConsola(argumento) {
  console.clear();

  // Cojo el div del HTML que uso para mostrar console.log
  var logger = document.getElementById("consola");

  // Adding log method from our console object
  console.log = function(text) {
    var element = document.createElement("div");
    var txt = document.createTextNode(text);
    element.appendChild(txt);
    logger.appendChild(element);
  };
  // llamo a la consola
  console.log(argumento);
}
// cambia medidas de imagenes y fuente de la carta según las nuevas medidas
function medidasImagenes(alto, ancho, fuente) {
  if (fuente) {
    NUMERO.style.fontSize = fuente + "px";
  }
  const CLASS_IMGS = document.querySelectorAll(".w_img");
  CLASS_IMGS.forEach(function(laImagen) {
    laImagen.setAttribute("width", ancho);
    laImagen.setAttribute("height", alto);
  });
}
var id_intervalo = 0; //declaro id_intervalo para poder actuar sobre él
// coger class de imagenes
const CLASS_IMGS = document.querySelectorAll(".w_img");
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

document.onload = iniciaIntervalo(); // al cargar el documento inicia el intervalo
