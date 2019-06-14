const sumFibs = require("./index");

test("Return sum of all odd Fibonacci numbers <= num", () => {
    expect(sumFibs(1000)).toBe(1785);
});
test("Return sum of all odd Fibonacci numbers <= num", () => {
    expect(sumFibs(4000000)).toBe(4613732);
});
test("Return sum of all odd Fibonacci numbers <= num", () => {
    expect(sumFibs(4)).toBe(5);
});
test("Return sum of all odd Fibonacci numbers <= num", () => {
    expect(sumFibs(75024)).toBe(60696);
});
test("Return sum of all odd Fibonacci numbers <= num", () => {
    expect(sumFibs(75025)).toBe(135721);
});