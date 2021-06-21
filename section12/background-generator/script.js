var _ =  require('lodash');


let array = [5,3,8,9,7,2,3,8,1,8,2,8,3,7,36,3];
console.log('answer:', _.without(array,3));

var h3 = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.getElementById("random");

function setGradient() {
  body.style.background =
    "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

  h3.textContent = body.style.background + ";";
  //   button.style.background =
  //     "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
}

function generateRandomColor() {
  var randomColor =
    "#" +
    Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0");

  return randomColor;
}

function setRandomColors() {
  // formula explanation: https://dev.to/akhil_001/generating-random-color-with-single-line-of-js-code-fhj
  color1.value = generateRandomColor();
  color2.value = generateRandomColor();
  setGradient();
}

// calls setGradient function on page load
window.onload = setGradient();

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
button.addEventListener("click", setRandomColors);

//Another way to generate a random color
function getRandomGradient() {
  let r1 = getRandomInt(256);
  let g1 = getRandomInt(256);
  let b1 = getRandomInt(256);
  let r2 = getRandomInt(256);
  let g2 = getRandomInt(256);
  let b2 = getRandomInt(256);
  let randomGradient =
    "linear-gradient(to right,rgb(" +
    r1 +
    ", " +
    g1 +
    ", " +
    b1 +
    "), rgb(" +
    r2 +
    ", " +
    g2 +
    ", " +
    b2 +
    "))";

  body.style.background = randomGradient;
  randomBtn.style.background = randomGradient;

  css.textContent = body.style.background + ";";
}
