
import "bootstrap";
import "./style.css";

window.onload = () => {
  document.querySelector('#btn'). addEventListener("click",() =>{
    document.querySelector("#the-excuse").innerHTML = gExcuses();
  });
  console.log("Hello Rigo from the console! ");
};
let gExcuses = () => {
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = ["before the class","right on time","when I finished","during my lunch","while I was praying"];

  let whoIndex = Math.flow(Math.random()*who.length);
  let actionIndex = Math.flow(Math.random()*action.length);
  let whatIndex = Math.flow(Math.random()*what.length);
  let whenIndex = Math.flow(Math.random()*when.length);
  
    return who[whoIndex] + ''+ action[actionIndex] + ' '+what[whatIndex]+''+when[whenIndex];
};
