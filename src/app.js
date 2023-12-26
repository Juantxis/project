
import "bootstrap";
import "./style.css";

window.onload = () => {
  document.querySelector('#btn'). addEventListener("click",() =>{
    document.querySelector("#the-excuse").innerHTML = gExcuses();
  });
  console.log("Hello Rigo from the console! ");
};
