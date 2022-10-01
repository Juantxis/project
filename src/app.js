/* eslint-disable */

import { Carousel } from "bootstrap";
import "./style.css";
console.clear();
const CONTENEDOR_OBJETOS = new Object();
const ESCUCHADORES = new Object();
var VARIABLES = new Object();
VARIABLES.id_intervalo = 0;
// coger ids botones
CONTENEDOR_OBJETOS.BT_CREAR_CARTA = document.getElementById("generaCarta");
CONTENEDOR_OBJETOS.BT_PARA_INTERVALO = document.getElementById("paraIntervalo");
CONTENEDOR_OBJETOS.BT_MEDIDAS = document.getElementById("cambiaMedida");
// coger ids inputs medidas
CONTENEDOR_OBJETOS.MEDIDAS_CARTA = document.getElementById("cuerpoCarta");
CONTENEDOR_OBJETOS.CAMBIA_ALTO = document.getElementById("alto_carta");
CONTENEDOR_OBJETOS.CAMBIA_ANCHO = document.getElementById("ancho_carta");

// coger id elemento setInterval
CONTENEDOR_OBJETOS.CUENTA_ATRAS = document.getElementById("cuentaAtras");
// coger ids elementos carta
CONTENEDOR_OBJETOS.NUMERO = document.getElementById("numero");
CONTENEDOR_OBJETOS.PALO_ARRIBA = document.getElementById("paloArriba");
CONTENEDOR_OBJETOS.PALO_ABAJO = document.getElementById("paloAbajo");
const FUNCIONES = new Object();
// enviar a consola aConsola(argumento);
FUNCIONES.A_CONSOLA = function aConsola(argumento) {
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
};
// funcion para crear la carta
FUNCIONES.CREAR_CARTA = function crearCarta(event) {
  //Genera el número aleatorio
  let losNumeros = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
  let eligeNumero = Math.floor(Math.random() * losNumeros.length);

  let crea_img = FUNCIONES["COMPROBAR_MEDIDA"](".w_img");
  const palos = [
    crea_img + '  class="w_img" src="src/assets/img/treboles.png" >',
    crea_img + '  class="w_img" src="src/assets/img/picas.png" >',
    crea_img + '  class="w_img" src="src/assets/img/corazon.png" >',
    crea_img + '  class="w_img" src="src/assets/img/diamante.png" >'
  ];
  let eligePalo = Math.floor(Math.random() * palos.length);

  // si los palos son diamantes o corazones cambia el estilo del texto a rojo
  if (
    palos[eligePalo].includes("corazon") ||
    palos[eligePalo].includes("diamante")
  ) {
    CONTENEDOR_OBJETOS["NUMERO"].style.color = "red";
  } else {
    CONTENEDOR_OBJETOS["NUMERO"].style.color = "black";
  }

  // mete los valores aleatorios en los div correspondientes
  CONTENEDOR_OBJETOS["PALO_ARRIBA"].innerHTML = palos[eligePalo];
  CONTENEDOR_OBJETOS["PALO_ABAJO"].innerHTML = palos[eligePalo];
  CONTENEDOR_OBJETOS["NUMERO"].innerHTML = losNumeros[eligeNumero];
};
// cambio de medidas de la CARTA

FUNCIONES.CAMBIA_MEDIDAS = function cambiaMedidas() {
  //verificamos las medidas que nos pasan
  let el_alto = CONTENEDOR_OBJETOS["CAMBIA_ALTO"].value;
  let el_ancho = CONTENEDOR_OBJETOS["CAMBIA_ANCHO"].value;

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
    CONTENEDOR_OBJETOS["CAMBIA_ALTO"].value = "";
    CONTENEDOR_OBJETOS["CAMBIA_ANCHO"].value = "";
    //calcular tamaño nuevo de imagen
    let medida_img = Math.round((el_ancho / 150) * 30);
    let medida_fuente = Math.round((el_ancho / 150) * 70);
    //si no hay error en los valores cambiamos las medidas
    CONTENEDOR_OBJETOS["MEDIDAS_CARTA"].style.height = el_alto + "px";
    CONTENEDOR_OBJETOS["MEDIDAS_CARTA"].style.width = el_ancho + "px";

    //retocar imagen y fuente
    FUNCIONES["MEDIDAS_IMGS"](medida_img, medida_img, medida_fuente);
  }
};
//parar intervalo
FUNCIONES.PARA_INTERVALO = function paraIntervalo() {
  if (VARIABLES["id_intervalo"]) {
    // si ya existe el intervalo
    CONTENEDOR_OBJETOS["CUENTA_ATRAS"].innerHTML = ": 10";
    CONTENEDOR_OBJETOS["BT_PARA_INTERVALO"].innerHTML =
      '<i class="fa-solid fa-play"></i>';
    clearInterval(VARIABLES["id_intervalo"]);
    VARIABLES.id_intervalo = 0;
  } else {
    FUNCIONES["INICIA_INTERVALO"]();
  }
};
FUNCIONES.INICIA_INTERVALO = function iniciaIntervalo() {
  //crear intervalo

  CONTENEDOR_OBJETOS["BT_PARA_INTERVALO"].innerHTML =
    '<i class="fa-solid fa-stop"></i>';
  let counter = 10;
  VARIABLES.id_intervalo = setInterval(function() {
    if (counter == 0) {
      clearInterval(VARIABLES["id_intervalo"]);
      CONTENEDOR_OBJETOS["CUENTA_ATRAS"].innerHTML = ": 10";
      FUNCIONES["CREAR_CARTA"]();
      FUNCIONES["INICIA_INTERVALO"]();
      console.log(VARIABLES);
    } else {
      // hacer cuenta atras en div
      counter = counter - 1;
      CONTENEDOR_OBJETOS["CUENTA_ATRAS"].innerHTML = ": 0" + counter;
    }
  }, 1000);
};

//funcion comprueba medida de las imagenes
FUNCIONES.COMPROBAR_MEDIDA = function comprobar_medida(clase) {
  const comprueba_medida = document.querySelector(clase);
  let hay_width = comprueba_medida.getAttribute("width");
  let hay_height = comprueba_medida.getAttribute("height");
  if (hay_width === 30) {
    return '<img width="30" height="30"';
  } else {
    return '<img width="' + hay_width + '" height="' + hay_height + '"';
  }
};

// cambia medidas de imagenes y fuente de la carta según las nuevas medidas
FUNCIONES.MEDIDAS_IMGS = function medidasImagenes(alto, ancho, fuente) {
  if (fuente) {
    CONTENEDOR_OBJETOS["NUMERO"].style.fontSize = fuente + "px";
  }
  const CLASS_IMGS = document.querySelectorAll(".w_img");
  CLASS_IMGS.forEach(function(laImagen) {
    laImagen.setAttribute("width", ancho);
    laImagen.setAttribute("height", alto);
  });
};

// eventos para botones
ESCUCHADORES.BT_CREAR_CARTA = CONTENEDOR_OBJETOS[
  "BT_CREAR_CARTA"
].addEventListener("click", FUNCIONES["CREAR_CARTA"], false);
ESCUCHADORES.BT_PARA_INTERVALO = CONTENEDOR_OBJETOS[
  "BT_PARA_INTERVALO"
].addEventListener("click", FUNCIONES["PARA_INTERVALO"], false);
ESCUCHADORES.BT_MEDIDAS = CONTENEDOR_OBJETOS["BT_MEDIDAS"].addEventListener(
  "click",
  FUNCIONES["CAMBIA_MEDIDAS"],
  false
);
console.log(VARIABLES);
document.onload = FUNCIONES["INICIA_INTERVALO"]();
