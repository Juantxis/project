
const simbolos = ['♠', '♥', '♦', '♣'];
const numeros = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

//Esta funcion elige de manera aleatoria numeros, simbolos y colores de las cartas
function generarCarta() {
  const aSimbolos = simbolos[Math.floor(Math.random() * simbolos.length)];
  const aNumero = numeros[Math.floor(Math.random() * numeros.length)];
  let color = '';

  if (aSimbolos === '♠' || aSimbolos === '♣') {
    color = 'black';
  } else {
    color = 'red';
  }
  
  const simbolo1E = document.getElementById('simbolo1');
  simbolo1E.textContent = aSimbolos;
  simbolo1E.style.color = color;

  const numeroE = document.getElementById('numero');
  numeroE.textContent = aNumero;
  numeroE.style.color = color;

  //De esta manera logre generar el segundo simbolo
  const simbolo2E = document.getElementById('simbolo2');
  simbolo2E.textContent = aSimbolos; 
  simbolo2E.style.color = color;
}
