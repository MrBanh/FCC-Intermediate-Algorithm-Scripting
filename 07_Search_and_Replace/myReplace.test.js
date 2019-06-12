const myReplace = require("./index");

test("search and replace on the sentence using the arguments provided", () => {
    expect(myReplace("Let us go to the store", "store", "mall"))
        .toBe("Let us go to the mall");
});
test("search and replace on the sentence using the arguments provided", () => {
    expect(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"))
        .toBe("He is Sitting on the couch");
});
test("search and replace on the sentence using the arguments provided", () => {
    expect(myReplace("This has a spellngi error", "spellngi", "spelling"))
        .toBe("This has a spelling error");
});
test("search and replace on the sentence using the arguments provided", () => {
    expect(myReplace("His name is Tom", "Tom", "john"))
        .toBe("His name is John");
});
test("search and replace on the sentence using the arguments provided", () => {
    expect(myReplace("Let us get back to more Coding", "Coding", "algorithms"))
        .toBe("Let us get back to more Algorithms");
});