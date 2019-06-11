const whatIsInAName = require("./index");

test("returns an array of all objects that have matching name and value pairs", () => {
    expect(whatIsInAName([{
            first: "Romeo",
            last: "Montague"
        }, {
            first: "Mercutio",
            last: null
        }, {
            first: "Tybalt",
            last: "Capulet"
        }], {
            last: "Capulet"
        }))
        .toEqual([{
            first: "Tybalt",
            last: "Capulet"
        }]);
});
test("returns an array of all objects that have matching name and value pairs", () => {
    expect(whatIsInAName([{
            "apple": 1
        }, {
            "apple": 1
        }, {
            "apple": 1,
            "bat": 2
        }], {
            "apple": 1
        }))
        .toEqual([{
            "apple": 1
        }, {
            "apple": 1
        }, {
            "apple": 1,
            "bat": 2
        }]);
});
test("returns an array of all objects that have matching name and value pairs", () => {
    expect(whatIsInAName([{
            "apple": 1,
            "bat": 2
        }, {
            "bat": 2
        }, {
            "apple": 1,
            "bat": 2,
            "cookie": 2
        }], {
            "apple": 1,
            "bat": 2
        }))
        .toEqual([{
            "apple": 1,
            "bat": 2
        }, {
            "apple": 1,
            "bat": 2,
            "cookie": 2
        }]);
});
test("returns an array of all objects that have matching name and value pairs", () => {
    expect(whatIsInAName([{
            "apple": 1,
            "bat": 2
        }, {
            "apple": 1
        }, {
            "apple": 1,
            "bat": 2,
            "cookie": 2
        }], {
            "apple": 1,
            "cookie": 2
        }))
        .toEqual([{
            "apple": 1,
            "bat": 2,
            "cookie": 2
        }]);
});
test("returns an array of all objects that have matching name and value pairs", () => {
    expect(whatIsInAName([{
            "apple": 1,
            "bat": 2
        }, {
            "apple": 1
        }, {
            "apple": 1,
            "bat": 2,
            "cookie": 2
        }, {
            "bat": 2
        }], {
            "apple": 1,
            "bat": 2
        }))
        .toEqual([{
            "apple": 1,
            "bat": 2
        }, {
            "apple": 1,
            "bat": 2,
            "cookie": 2
        }]);
});
test("returns an array of all objects that have matching name and value pairs", () => {
    expect(whatIsInAName([{
            "a": 1,
            "b": 2,
            "c": 3
        }], {
            "a": 1,
            "b": 9999,
            "c": 3
        }))
        .toEqual([]);
});