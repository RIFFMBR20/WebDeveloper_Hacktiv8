function removeSpace(text) {
  let noSpace = text.replaceAll(" ", "");
  return noSpace;
}

function reverseText(text) {
  let splitString = text.split("");
  let reverseArray = splitString.reverse();
  let joinArray = reverseArray.join("");
  return joinArray;
}

function updateVowels(text) {
  function changeVowels(char) {
    if (char == "a") {
      return "b";
    } else if (char == "i") {
      return "j";
    } else if (char == "u") {
      return "v";
    } else if (char == "e") {
      return "f";
    } else if (char == "o") {
      return "p";
    } else {
      return char;
    }
  }
  let splitString = text.split("");
  let result = splitString.map(changeVowels);
  let joinArray = result.join("");
  return joinArray
}

let password = "hacktiv 8";
let noSpaces = removeSpace(password);
let reversed = reverseText(noSpaces);
let encryptedPasssword = updateVowels(reversed);

console.log(encryptedPasssword);
