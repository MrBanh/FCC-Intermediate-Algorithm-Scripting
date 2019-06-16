const addTogether = require("./index.js");

test("Sums 2 arguments together. If only 1 argument, return a function", () => {
    expect(addTogether(2, 3)).toBe(5);
});
test("Sums 2 arguments together. If only 1 argument, return a function", () => {
    expect(addTogether(2)(3)).toBe(5);
});
test("Sums 2 arguments together. If only 1 argument, return a function", () => {
    expect(addTogether("http://bit.ly/IqT6zt")).toBe(undefined);
});
test("Sums 2 arguments together. If only 1 argument, return a function", () => {
    expect(addTogether(2, "3")).toBe(undefined);
});
test("Sums 2 arguments together. If only 1 argument, return a function", () => {
    expect(addTogether(2)([3])).toBe(undefined);
});