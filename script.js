"use strict";
const btn = document.getElementById("btn");
const inputText = document.getElementById("text");
const inputRange = document.getElementById("range");
const rangeSpan = document.getElementById("range-span");
const link = document.querySelector("a");
const square = document.getElementById("square");
const circle = document.getElementById("circle");
const btnInCircle = document.getElementById("e_btn");

const addBackground = function (str) {
  return (square.style.background = str);
};

const getTheValue = function (event) {
  return (inputText.textContent = event.target.value);
};

const valueForWidthAndHeight = function (event) {
  rangeSpan.textContent = event.target.value;
  circle.style.width = Number(rangeSpan.textContent) + "%";
  circle.style.height = Number(rangeSpan.textContent) + "%";
};

btnInCircle.style.display = "none";

inputText.addEventListener("input", function (event) {
  btn.addEventListener("click", function () {
    addBackground(getTheValue(event));
  });
});

inputRange.addEventListener("input", function (event) {
  valueForWidthAndHeight(event);
});
