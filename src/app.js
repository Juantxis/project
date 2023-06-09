/* eslint-disable */
// import "bootstrap/dist/js/bootstrap.min.js";

window.onload = function() {
  const cardSuits = ["hearts", "spades", "clubs", "diamonds"];
  const cardValues = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'King', 'Queen', 'Jack', 'Ace'];


  function getRandomNumber(min, max){
     let random = Math.random();  // generates a random number between 0 and 1
     let difference = max - min;   // calculates the difference between max and min
     let range = random * difference;  // scales the random number by the difference
     let finalNumber = Math.floor(range) + min;
     return finalNumber;
  };


  // Generate random suit and card value
    const cardSuitsIndex = getRandomNumber(0, cardSuits.length -1);
    const cardValuesIndex = getRandomNumber(0, cardValues.length -1);
    


};

console.log("Hello from the console!");
