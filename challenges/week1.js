function capitalize(word) {
  if (word === undefined) throw new Error("word is required");
  return word.charAt(0).toUpperCase() + word.slice(1);
}

function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");
  return `${firstName[0]}.${lastName[0]}`;
}

function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");
  return +(originalPrice * (1 + vatRate / 100)).toFixed(2);
}

function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");
  return +(originalPrice * (1 - reduction / 100)).toFixed(2);
}

function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");
  let index = Math.floor(str.length / 2);
  let midChar;
  str.length % 2 !== 0
    ? (midChar = str[index])
    : (midChar = str[index - 1] + str[index]);
  return midChar;
}

function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");
  //Reverse a String With Built-In Functions
  return word
    .split("")
    .reverse()
    .join("");
}

function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");
  let newArr = [];
  for (const i in words) {
    newArr.push(
      words[i]
        .split("")
        .reverse()
        .join("")
    );
  }
  return newArr;
}

function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
  // Add your code here!
}

function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
  // Add your code here!
}

function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
  // Add your code here!
}

module.exports = {
  capitalize,
  generateInitials,
  addVAT,
  getSalePrice,
  getMiddleCharacter,
  reverseWord,
  reverseAllWords,
  countLinuxUsers,
  getMeanScore,
  simpleFizzBuzz
};
