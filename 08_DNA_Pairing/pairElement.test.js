const pairElement = require("./index");

test("should return 2d array of DNA pairing", () => {
    expect(pairElement("ATCGA"))
        .toEqual([
            ["A", "T"],
            ["T", "A"],
            ["C", "G"],
            ["G", "C"],
            ["A", "T"]
        ]);
});
test("should return 2d array of DNA pairing", () => {
    expect(pairElement("TTGAG"))
        .toEqual([
            ["T", "A"],
            ["T", "A"],
            ["G", "C"],
            ["A", "T"],
            ["G", "C"]
        ]);
});
test("should return 2d array of DNA pairing", () => {
    expect(pairElement("CTCTA"))
        .toEqual([
            ["C", "G"],
            ["T", "A"],
            ["C", "G"],
            ["T", "A"],
            ["A", "T"]
        ]);
});