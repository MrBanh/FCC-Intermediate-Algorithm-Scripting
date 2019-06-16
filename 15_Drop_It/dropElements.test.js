const dropElements = require("./index.js");

test("Remove each element until callback function returns true, then returns rest of Array", () => {
    expect(dropElements([1, 2, 3, 4], function (n) {
            return n >= 3;
        }))
        .toEqual([3, 4]);
});

test("Remove each element until callback function returns true, then returns rest of Array", () => {
    expect(dropElements([0, 1, 0, 1], function (n) {
            return n === 1;
        }))
        .toEqual([1, 0, 1]);
});
test("Remove each element until callback function returns true, then returns rest of Array", () => {
    expect(dropElements([1, 2, 3], function (n) {
            return n > 0;
        }))
        .toEqual([1, 2, 3]);
});
test("Remove each element until callback function returns true, then returns rest of Array", () => {
    expect(dropElements([1, 2, 3, 4], function (n) {
            return n > 5;
        }))
        .toEqual([]);
});
test("Remove each element until callback function returns true, then returns rest of Array", () => {
    expect(dropElements([1, 2, 3, 7, 4], function (n) {
            return n > 3;
        }))
        .toEqual([7, 4]);
});
test("Remove each element until callback function returns true, then returns rest of Array", () => {
    expect(dropElements([1, 2, 3, 9, 2], function (n) {
            return n > 2;
        }))
        .toEqual([3, 9, 2]);
});