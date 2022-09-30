/* eslint-disable */
import { Carousel } from "bootstrap";
import "./style.css";
 // ids de la carta
var NUMERO = document.getElementById("numero");
var PALO_ARRIBA = document.getElementById("paloArriba");
var PALO_ABAJO = document.getElementById("paloAbajo");

// al pulsar el botón se genera la carta
var CREA_CARTA = document.getElementById("generaCarta");


var CUENTA_ATRAS = document.getElementById("cuentaAtras");

//parar intervalo
var BT_PAUSA = document.getElementById("pararIntervalo");



window.onload = cuenta();
