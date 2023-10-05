window.onload = () => {
  document.querySelector('#excusegenerate').addEventListener("click", () => {
    document.querySelector('#excuse').innerHTML = generateExcuse();
  });
  console.log("Hola Hans");
};
  
  const who = ['The dog', 'My grandma', 'His turtle', 'My bird'];
  const action = ['ate', 'peed', 'crushed', 'broke'];
  const what = ['my homework', 'the keys', 'the car'];
  const when = ['before the class', 'right on time', 'when I finished', 'during my lunch', 'while I was praying'];

  let generateExcuse = () => {
  
  const indexwho = Math.floor(Math.random() * who.length)
  const indexaction = Math.floor(Math.random() * action.length)
  const indexwhat = Math.floor(Math.random() * what.length)
  const indexwhen = Math.floor(Math.random() * when.length)
  
  return who[indexwho] +" "+ action[indexaction] +" " + what[indexwhat] + " " + when[indexwhen];
};


