const diffArray = require("./index");

test("return a new array with any items only found in one of the two given arrays, but not both", () => {
    expect(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]).sort()).toEqual(["pink wool"].sort());
});
test("return a new array with any items only found in one of the two given arrays, but not both", () => {
    expect(diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]).sort()).toEqual(["diorite", "pink wool"].sort());
});
test("return a new array with any items only found in one of the two given arrays, but not both", () => {
    expect(diffArray(["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"]).sort()).toEqual([].sort());
});
test("return a new array with any items only found in one of the two given arrays, but not both", () => {
    expect(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]).sort()).toEqual([4].sort());
});
test("return a new array with any items only found in one of the two given arrays, but not both", () => {
    expect(diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]).sort()).toEqual(["piglet", 4].sort());
});
test("return a new array with any items only found in one of the two given arrays, but not both", () => {
    expect(diffArray([], ["snuffleupagus", "cookie monster", "elmo"]).sort()).toEqual(["snuffleupagus", "cookie monster", "elmo"].sort());
});
test("return a new array with any items only found in one of the two given arrays, but not both", () => {
    expect(diffArray([1, "calf", 3, "piglet"], [7, "filly"]).sort()).toEqual([1, "calf", 3, "piglet", 7, "filly"].sort());
});