const sumAll = require("./index");

test(" the sum of those two numbers plus the sum of all the numbers between them", () => {
    expect(sumAll([1, 4])).toBe(10);
    expect(sumAll([4, 1])).toBe(10);
    expect(sumAll([5, 10])).toBe(45);
    expect(sumAll([10, 5])).toBe(45);
});