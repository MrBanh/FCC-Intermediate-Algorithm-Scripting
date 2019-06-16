const steamrollArray = require("./index");

test("Flatten a nest array", () => {
    expect(steamrollArray([
        [
            ["a"]
        ],
        [
            ["b"]
        ]
    ])).toEqual(["a", "b"]);
});

test("Flatten a nest array", () => {
    expect(steamrollArray([1, [2],
        [3, [
            [4]
        ]]
    ])).toEqual([1, 2, 3, 4]);
});

test("Flatten a nest array", () => {
    expect(steamrollArray([1, [],
        [3, [
            [4]
        ]]
    ])).toEqual([1, 3, 4]);
});

test("Flatten a nest array", () => {
    expect(steamrollArray([1, {},
        [3, [
            [4]
        ]]
    ])).toEqual([1, {}, 3, 4]);
});