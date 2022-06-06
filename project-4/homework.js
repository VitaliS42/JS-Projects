'use strict'

let baseText = document.querySelector(".textToReplace").innerText;
console.log(baseText);

console.log(baseText.replace(/'/g,'"'));

console.log(baseText.replace(/\B'|'\B/g,'"'));

let moddedText = baseText.replace(/\B'|'\B/g,'"');

document.querySelector(".replacedText").innerText = moddedText;