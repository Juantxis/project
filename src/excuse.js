/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  const initialExcuse = "My dog ate my homework";
  document.getElementById("excuse").innerText = initialExcuse;

  const generateNewExcuse = () => {
    const whoArray = ["my dog", "my granny", "my mom"];
    const whatArray = ["ate", "burned", "ripped"];
    const homeWork = ["my homework"];

    const whoIndex = Math.floor(Math.random() * whoArray.length);
    const whatIndex = Math.floor(Math.random() * whatArray.length);
    const homeWorkIndex = Math.floor(Math.random() * homeWork.length);

    const newExcuse = `${whoArray[whoIndex]} ${whatArray[whatIndex]} ${homeWork[homeWorkIndex]}.`;

    return newExcuse; // Return the new excuse string
  };

  const newExcuseButton = document.getElementById("newExcuse");
  newExcuseButton.addEventListener("click", function() {
    
    const excuse = generateNewExcuse();

    document.getElementById("excuse").innerText = excuse;

    console.log(excuse);
  });
};
