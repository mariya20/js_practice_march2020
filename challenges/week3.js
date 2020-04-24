function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  return nums.map((el) => el * el);
}

function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  for (var x = 1; x < words.length; x++) {
    words[x] = words[x].charAt(0).toUpperCase() + words[x].slice(1);
  }
  return words.toString().replace(/,/g, "");
}

function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  let subArr = [];
  for (const value of people) subArr.push(...value.subjects);

  return subArr.length;
}

function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  let subArr = [];
  for (const value of menu) {
    subArr.push(...value.ingredients);
  }

  return subArr.some((element) => element === ingredient);
}

function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");

  let duplicates = arr1.filter(function (val) {
    return arr2.indexOf(val) != -1;
  });

  let sortedDuplicates = duplicates.sort((a, b) => a - b);
  let uniqueItems = [...new Set(sortedDuplicates)];

  return uniqueItems;
}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers,
};
