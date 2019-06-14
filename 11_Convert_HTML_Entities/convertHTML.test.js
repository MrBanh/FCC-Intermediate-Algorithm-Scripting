const convertHTML = require("./index");

test("Convert &, <, >, and \", and \' to HTML entities", () => {
    expect(convertHTML("Dolce & Gabbana")).toBe("Dolce &​amp; Gabbana");
});
test("Convert &, <, >, and \", and \' to HTML entities", () => {
    expect(convertHTML("Hamburgers < Pizza < Tacos")).toBe("Hamburgers &​lt; Pizza &​lt; Tacos");
});
test("Convert &, <, >, and \", and \' to HTML entities", () => {
    expect(convertHTML("Sixty > twelve")).toBe("Sixty &​gt; twelve");
});
test("Convert &, <, >, and \", and \' to HTML entities", () => {
    expect(convertHTML('Stuff in "quotation marks"')).toBe("Stuff in &​quot;quotation marks&​quot;");
});
test("Convert &, <, >, and \", and \' to HTML entities", () => {
    expect(convertHTML("Schindler's List")).toBe("Schindler&​apos;s List");
});
test("Convert &, <, >, and \", and \' to HTML entities", () => {
    expect(convertHTML("<>")).toBe("&​lt;&​gt;");
});
test("Convert &, <, >, and \", and \' to HTML entities", () => {
    expect(convertHTML("abc")).toBe("abc");
});