const uniteUnique = require("./index");

test("Array of unique values in order of original arrays", () => {
    expect(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]))
        .toEqual([1, 3, 2, 5, 4]);
});
test("Array of unique values in order of original arrays", () => {
    expect(uniteUnique([1, 3, 2], [1, [5]], [2, [4]]))
        .toEqual([1, 3, 2, [5],
            [4]
        ]);
});
test("Array of unique values in order of original arrays", () => {
    expect(uniteUnique([1, 2, 3], [5, 2, 1]))
        .toEqual([1, 2, 3, 5]);
});
test("Array of unique values in order of original arrays", () => {
    expect(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]))
        .toEqual([1, 2, 3, 5, 4, 6, 7, 8]);
});