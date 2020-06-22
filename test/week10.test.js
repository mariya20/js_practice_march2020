const {
  sumDigits,
  createRange,
  getScreentimeAlertList,
  hexToRGB,
  findWinner,
} = require("../challenges/week10");

describe("sumDigits", () => {
  test("The function returns the sum of all digits", () => {
    expect(sumDigits(123)).toBe(6);
    expect(sumDigits(-11)).toBe(0);
  });
});

describe("createRange", () => {
  test("The function returns correct array when passed values for start, end and step", () => {
    expect(createRange(3, 11, 2)).toEqual([3, 5, 7, 9, 11]);
    expect(createRange(-5, 5, 5)).toEqual([-5, 0, 5]);
  });
  test("The function returns correct array when passed values for start and end, without step", () => {
    expect(createRange(1, 5)).toEqual([1, 2, 3, 4, 5]);
  });
});

describe.only("getScreentimeAlertList", () => {
  test("The function returns username if date match and over 100 mins", () => {
    const users = [
      {
        username: "beth_1234",
        name: "Beth Smith",
        screenTime: [
          {
            date: "2019-05-01",
            usage: { twitter: 34, instagram: 22, facebook: 40 },
          },
          {
            date: "2019-05-02",
            usage: { twitter: 56, instagram: 40, facebook: 31 },
          },
          {
            date: "2019-05-03",
            usage: { twitter: 12, instagram: 15, facebook: 19 },
          },
          {
            date: "2019-05-04",
            usage: { twitter: 10, instagram: 56, facebook: 61 },
          },
        ],
      },
      {
        username: "sam_j_1989",
        name: "Sam Jones",
        screenTime: [
          {
            date: "2019-06-11",
            usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10 },
          },
          {
            date: "2019-06-13",
            usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16 },
          },
          {
            date: "2019-06-14",
            usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31 },
          },
        ],
      },
    ];
    expect(getScreentimeAlertList(users, "2019-05-04")).toEqual(["beth_1234"]);
  });
});

describe("hexToRGB", () => {
  test("The function should transform the hex code into an RGB code, returned as a string", () => {
    expect(hexToRGB("#FF1133")).toEqual("rgb(255,17,51)");
  });
  test("Case insensitive", () => {
    expect(hexToRGB("#ff1133")).toEqual("rgb(255,17,51)");
  });
});

describe("findWinner", () => {
  test("The function returns X when X is the winner", () => {
    const board = [
      ["X", "0", null],
      ["X", null, "0"],
      ["X", null, "0"],
    ];
    expect(findWinner(board)).toEqual("X");
  });
  test("The function returns 0 when 0 is the winner", () => {
    const board = [
      ["X", "X", null],
      ["0", "0", "0"],
      ["X", null, null],
    ];
    expect(findWinner(board)).toEqual("0");
  });
  test("The function returns null when no current winner", () => {
    const board = [
      [null, "X", null],
      ["0", null, "0"],
      ["X", null, null],
    ];
    expect(findWinner(board)).toEqual(null);
  });
});
