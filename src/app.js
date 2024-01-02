//Ademas de cambiar el codigo de archivo, cambie las variables a un solo idioma
function excusesGenerator() {
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = ["before the class", "right on time", "when I finished", "during my lunch", "while I was praying"];

  const indexRandom = Math.floor(Math.random() * who.length);
  const indexRandom1 = Math.floor(Math.random() * action.length);
  const indexRandom2 = Math.floor(Math.random() * what.length);
  const indexRandom3 = Math.floor(Math.random() * when.length);

  const randomElement = who[indexRandom];
  const randomElement1 = action[indexRandom1];
  const randomElement2 = what[indexRandom2];
  const randomElement3 = when[indexRandom3];

  // Cambie la variable excuses con $

  const excuses = `${randomElement} ${randomElement1} ${randomElement2} ${randomElement3}`;


  const myDiv = document.getElementById("myText");
  myDiv.innerText = excuses;

  myDiv.style.textAlign = "center";
}

excusesGenerator();
