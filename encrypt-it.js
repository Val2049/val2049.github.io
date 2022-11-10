/*
 * Starter file 
 */
console.log("Window loaded!");

(function() {
  "use strict";

  window.addEventListener("load", init);

  function init() {
    let encryptButton = document.getElementById("encrypt-it");
    encryptButton.addEventListener("click", handleClick);
    let resetButton = document.getElementById("reset");
    resetButton.addEventListener("click", reset);
  }


  function handleClick() {
    console.log("Window loaded!");
    var userInput = document.getElementById("input-text");
    var result = shiftCipher(userInput);
    document.getElementById("result").textContent = result;
  }

  function shiftCipher(text) {
    text = text.value.toLowerCase();
    let result = "";
    for (let i = 0; i < text.length; i++) {
      if (text[i] < 'a' || text[i] > 'z') {
        result += text[i];
      } else if (text[i] == 'z') {
        result += 'a';
      } else { // letter is between 'a' and 'y'
        let letter = text.charCodeAt(i);
        let resultLetter = String.fromCharCode(letter + 1);
        result += resultLetter;
      }
    }
    return result;
  }
})();