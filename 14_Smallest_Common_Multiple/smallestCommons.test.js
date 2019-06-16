const smallestCommons = require("./index.js");

test("Smallest common multiple of sequential numbers in array", () => {
    expect(smallestCommons([1, 5])).toBe(60);
});
test("Smallest common multiple of sequential numbers in array", () => {
    expect(smallestCommons([5, 1])).toBe(60);
});
test("Smallest common multiple of sequential numbers in array", () => {
    expect(smallestCommons([2, 10])).toBe(2520);
});
test("Smallest common multiple of sequential numbers in array", () => {
    expect(smallestCommons([1, 13])).toBe(360360);
});
test("Smallest common multiple of sequential numbers in array", () => {
    expect(smallestCommons([23, 18])).toBe(6056820);
});