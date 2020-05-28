const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");
  const a = nums.indexOf(n);
  if (a === -1 || a === nums.length - 1) {
    return null;
  } else {
    return nums[nums.indexOf(n) + 1];
  }
};

const count1sand0s = (str) => {
  if (str === undefined) throw new Error("str is required");
  let sum = 0;
  for (let i in str) {
    sum += Number(str[i]);
  }
  return { "1": sum, "0": str.length - sum };
};

const reverseNumber = (n) => {
  if (n === undefined) throw new Error("n is required");
  return parseFloat(n.toString().split("").reverse().join(""));
};

const sumArrays = (arrs) => {
  if (arrs === undefined) throw new Error("arrs is required");
  return arrs
    .map((item) => item.reduce((a, b) => a + b))
    .reduce((a, b) => a + b);
};

const arrShift = (arr) => {
  if (arr === undefined) throw new Error("arr is required");
  // Your code here!
};

const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  // Your code here!
};

const getWordFrequencies = (str) => {
  if (str === undefined) throw new Error("str is required");
  // Your code here!
};

module.exports = {
  findNextNumber,
  count1sand0s,
  reverseNumber,
  sumArrays,
  arrShift,
  findNeedle,
  getWordFrequencies,
};
