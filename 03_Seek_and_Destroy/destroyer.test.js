const destroyer = require('./index');

test("Should remove all elements from array (first argument) that matches following arguments", () => {
    expect(destroyer([1, 2, 3, 1, 2, 3], 2, 3)).toEqual([1, 1]);
});
test("Should remove all elements from array (first argument) that matches following arguments", () => {
    expect(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3)).toEqual([1, 5, 1]);
});
test("Should remove all elements from array (first argument) that matches following arguments", () => {
    expect(destroyer([3, 5, 1, 2, 2], 2, 3, 5)).toEqual([1]);
});
test("Should remove all elements from array (first argument) that matches following arguments", () => {
    expect(destroyer([2, 3, 2, 3], 2, 3)).toEqual([]);
});
test("Should remove all elements from array (first argument) that matches following arguments", () => {
    expect(destroyer(["tree", "hamburger", 53], "tree", 53)).toEqual(["hamburger"]);
});
test("Should remove all elements from array (first argument) that matches following arguments", () => {
    expect(destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan")).toEqual([12, 92, 65]);
});