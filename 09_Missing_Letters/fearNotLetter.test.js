const fearNotLetter = require("./index");

test("Should return the missing letter in the letter range", () => {
    expect(fearNotLetter("abce")).toBe("d");
});
test("Should return the missing letter in the letter range", () => {
    expect(fearNotLetter("abcdefghjklmno")).toBe("i");
});
test("Should return the missing letter in the letter range", () => {
    expect(fearNotLetter("stvwx")).toBe("u");
});
test("Should return the missing letter in the letter range", () => {
    expect(fearNotLetter("bcdf")).toBe("e");
});
test("Should return the missing letter in the letter range", () => {
    expect(fearNotLetter("abcdefghijklmnopqrstuvwxyz")).toBe(undefined);
});