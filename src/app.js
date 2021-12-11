/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
let pronouns = ["the", "one", "my", "your", "their", "some"];
let adjectives = ["stupid", "new", "old", "technical", "awfull", "good"];
let objects = ["idea", "web", "nosense", "project", "program", "thing"];

window.onload = function() {
  for (let i = 0; i < pronouns.length; i++) {
    for (let j = 0; j < adjectives.length; j++) {
      for (let k = 0; k < objects.length; k++) {
        document.write(
          pronouns[i].concat(adjectives[j], objects[k], ".com" + "<br>")
        );
      }
    }
  }
};
