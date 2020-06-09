const {
  sumMultiples,
  isValidDNA,
  getComplementaryDNA,
  isItPrime,
  createMatrix,
  areWeCovered,
} = require("../challenges/week9");

describe("sumMultiples", () => {
  test("Return the sum of any numbers which are a multiple of 3 or 5", () => {
    expect(sumMultiples([0, 1, 2, 3, 4, 5, 6])).toBe(14);
    expect(sumMultiples([1, 2, 4, 7])).toBe(0);
    expect(sumMultiples([-3, -5, 0, 3, 5])).toBe(0);
    expect(sumMultiples(["a", 3.0, 3.1, 4.9])).toBe(3);
  });
});

describe("isValidDNA", () => {
  test("Return true/false depending on whether it is a valid DNA string. A valid DNA string may contain characters C, G, T or A only.", () => {
    expect(isValidDNA("CGTA")).toBe(true);
    ``;
    expect(isValidDNA("cgta")).toBe(true);
    expect(isValidDNA("CGTB")).toBe(false);
  });
});

describe("getComplementaryDNA", () => {
  test("Return a string of the complementary base pairs. In DNA, T always pairs with A, and C always pairs with G. So a string of 'ACTG' would have a complementary DNA string of 'TGAC'", () => {
    expect(getComplementaryDNA("ACTG")).toBe("TGAC");
  });
});

describe("isItPrime", () => {
  test("Return true/false depending on whether it is a prime number or not. A prime number is a number that can only be divided evenly by 1 and itself (for example, 7)", () => {
    expect(isItPrime(7)).toBe(true);
    expect(isItPrime(1)).toBe(false);
    expect(isItPrime(-1)).toBe(false);
    expect(isItPrime(0)).toBe(false);
    expect(isItPrime("o")).toBe(false);
  });
});

describe("createMatrix", () => {
  test("Return an array of n arrays, each filled with n items", () => {
    expect(createMatrix(3, "foo")).toStrictEqual([
      ["foo", "foo", "foo"],
      ["foo", "foo", "foo"],
      ["foo", "foo", "foo"],
    ]);
    expect(createMatrix(1, "poo")).toStrictEqual([["poo"]]);
  });
});

describe.only("areWeCovered", () => {
  test("Return true/false depending on whether there are enough staff scheduled for the given day.", () => {
    const staff = [
      { name: "Leanne", rota: ["Monday", "Tuesday", "Friday"] },
      {
        name: "Jackie",
        rota: ["Saturday", "Sunday", "Tuesday", "Wednesday", "Thursday"],
      },
      { name: "Colin", rota: ["Saturday", "Sunday", "Monday", "Wednesday"] },
      { name: "Jonathan", rota: ["Saturday", "Sunday", "Tuesday", "Friday"] },
      { name: "Neil", rota: ["Saturday", "Sunday", "Friday"] },
    ];
    expect(areWeCovered(staff, "Sunday")).toBe(true);
    expect(areWeCovered(staff, "Monday")).toBe(false);
    expect(areWeCovered(staff, "Tuesday")).toBe(true);
    expect(areWeCovered(staff, "Wednesday")).toBe(false);
    expect(areWeCovered(staff, "Thursday")).toBe(false);
    expect(areWeCovered(staff, "Friday")).toBe(true);
    expect(areWeCovered(staff, "Saturday")).toBe(true);
  });
});
