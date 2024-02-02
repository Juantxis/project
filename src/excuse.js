/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  const whoArray = ['My dog', 'My granny', 'My mom'];
  const whatArray = ['ate', 'burned', 'ripped'];
  const objectArray = ['my homework', 'the keys', 'the car'];
  const whenArray = ['before the class', 'right on time', 'when I finished', 'during my lunch', 'while I was praying'];

  // Generate a random sentence
  const generateRandomSentence = () => {
    const whoIndex = Math.floor(Math.random() * whoArray.length);
    const whatIndex = Math.floor(Math.random() * whatArray.length);
    const objectIndex = Math.floor(Math.random() * objectArray.length);
    const whenIndex = Math.floor(Math.random() * whenArray.length);

    const randomSentence = `${whoArray[whoIndex]} ${whatArray[whatIndex]} ${objectArray[objectIndex]} ${whenArray[whenIndex]}.`;
    return randomSentence;
  };

  // Get the element where the random sentence will be displayed
  const randomSentenceElement = document.getElementById('randomSentence');

  // Generate and display a random sentence when the page loads
  randomSentenceElement.innerText = generateRandomSentence();
};


  const newExcuseButton = document.getElementById("newExcuse");
  newExcuseButton.addEventListener("click", function() {
    
    const excuse = generateNewExcuse();

    document.getElementById("excuse").innerText = excuse;

    console.log(excuse);
  });
};
