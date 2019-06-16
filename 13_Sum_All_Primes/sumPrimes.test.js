const sumPrimes = require("./index.js");

test("Sums all prime numbers up to provided number (inclusive)", () => {
    expect(sumPrimes(10)).toBe(17);
});
test("Sums all prime numbers up to provided number (inclusive)", () => {
    expect(sumPrimes(977)).toBe(73156);
});