/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};

function domainGenerator() {
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  for (let pro of pronoun) {
    for (let ad of adj) {
      for (let no of noun) {
        console.log(`${pro}${ad}${no}.com`);
      }
    }
  }
}
domainGenerator();
