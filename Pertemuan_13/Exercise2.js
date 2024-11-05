function reverseString(text) {
  let splitString = text.split("");

  let reverseArray = splitString.reverse();

  let joinArray = reverseArray.join("");

  return joinArray;
}

console.log(reverseString('Hello World and Coders'))