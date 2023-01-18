/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
//import { RuntimeModule } from "webpack";

window.onload = () => {
  //write your code here
  let generateExcuse = () => {
    let who = ["My cat", "A spider", "An alligator", "Obi-Wan Kenobi"];
    let action = ["puked on", "destroyed", "growled at", "had"];
    let what = ["my laptop", "the high ground", "my alarm clock", "my phone"];
    let when = [
      "when I woke up",
      "during the apocalypse",
      "during rush hour",
      "while time traveling"
    ];

    let whoIndex = Math.floor(Math.random() * who.length);
    let actionIndex = Math.floor(Math.random() * action.length);
    let whatIndex = Math.floor(Math.random() * what.length);
    let whenIndex = Math.floor(Math.random() * when.length);

    return (
      who[whoIndex] +
      " " +
      action[actionIndex] +
      " " +
      what[whatIndex] +
      " " +
      when[whenIndex]
    );
  };
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#excuse").innerHTML = generateExcuse();
  });
};
