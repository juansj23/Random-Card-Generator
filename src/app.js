/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  //write your code here
  document.querySelector("#numberCard").innerHTML = generadorRandomNumbers();
  let rojo = (document.querySelector(
    "#icons2"
  ).innerHTML = document.querySelector(
    "#icons"
  ).innerHTML = generadorRandomCards());
};

//Funcion para generar las cartas random
let generadorRandomCards = () => {
  let suit = ["♦", "♥", "♠", "♣"];
  let indexSuit = Math.floor(Math.random() * suit.length);
  return suit[indexSuit];
};

//Funcion para generar los numeros random
let generadorRandomNumbers = () => {
  let numbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let indexNumbers = Math.floor(Math.random() * numbers.length);
  return numbers[indexNumbers];
};
