const translatePigLatin = require("./index");

test("consonant(s) + ay at the end", () => {
    expect(translatePigLatin("california")).toBe("aliforniacay");
});
test("consonant(s) + ay at the end", () => {
    expect(translatePigLatin("paragraphs")).toBe("aragraphspay");
});
test("consonant(s) + ay at the end", () => {
    expect(translatePigLatin("glove")).toBe("oveglay");
});
test("if word begins with vowel, add way to end", () => {
    expect(translatePigLatin("algorithm")).toBe("algorithmway");
});
test("if word begins with vowel, add way to end", () => {
    expect(translatePigLatin("eight")).toBe("eightway");
});