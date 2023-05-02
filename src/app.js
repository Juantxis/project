/* eslint-disable */
// import "bootstrap";
// import "./style.css";

// import "./assets/img/rigo-baby.jpg";
// import "./assets/img/4geeks.ico";




const excuseElement = document.querySelector("#excuse");

  
  let who = ['The dog','My grandma','His turtle','My bird'];
  let action = ['ate','peed','crushed','broke'];
  let what = ['my homework', 'the keys', 'the car'];
  let when = ['before the class','right on time','when I finished','during my lunch','while I was praying'];

 
  function generarExcusa() {
    let whoAleatorio = who[Math.floor(Math.random() * who.length)];
    let actionAleatorio = action[Math.floor(Math.random() * action.length)];
    let whatAleatorio = what[Math.floor(Math.random() * what.length)];
    let whenAleatorio = when[Math.floor(Math.random() * when.length)];

    // Crear la excusa aleatoria

    let excusa = whoAleatorio + " " + actionAleatorio + " " + whatAleatorio + " " + whenAleatorio + ".";

    // Establecer la excusa en el elemento HTML con ID #excuse

    document.getElementById("excuse").innerHTML = excusa;
    const mainParagraph = document.getElementById('excuse');

  console.log(mainParagraph);
  }

  // Llamar a la función generarExcusa cuando se carga la página

  generarExcusa();

