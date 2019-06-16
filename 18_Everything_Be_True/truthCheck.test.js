const truthCheck = require("./index.js");

test("Predicate is truthy on all elements or not", () => {
    expect(truthCheck([{
            "user": "Tinky-Winky",
            "sex": "male"
        }, {
            "user": "Dipsy",
            "sex": "male"
        }, {
            "user": "Laa-Laa",
            "sex": "female"
        }, {
            "user": "Po",
            "sex": "female"
        }], "sex"))
        .toBe(true);
});
test("Predicate is truthy on all elements or not", () => {
    expect(truthCheck([{
            "user": "Tinky-Winky",
            "sex": "male"
        }, {
            "user": "Dipsy"
        }, {
            "user": "Laa-Laa",
            "sex": "female"
        }, {
            "user": "Po",
            "sex": "female"
        }], "sex"))
        .toBe(false);
});
test("Predicate is truthy on all elements or not", () => {
    expect(truthCheck([{
            "user": "Tinky-Winky",
            "sex": "male",
            "age": 0
        }, {
            "user": "Dipsy",
            "sex": "male",
            "age": 3
        }, {
            "user": "Laa-Laa",
            "sex": "female",
            "age": 5
        }, {
            "user": "Po",
            "sex": "female",
            "age": 4
        }], "age"))
        .toBe(false);
});
test("Predicate is truthy on all elements or not", () => {
    expect(truthCheck([{
            "name": "Pete",
            "onBoat": true
        }, {
            "name": "Repeat",
            "onBoat": true
        }, {
            "name": "FastFoward",
            "onBoat": null
        }], "onBoat"))
        .toBe(false);
});
test("Predicate is truthy on all elements or not", () => {
    expect(truthCheck([{
            "name": "Pete",
            "onBoat": true
        }, {
            "name": "Repeat",
            "onBoat": true,
            "alias": "Repete"
        }, {
            "name": "FastFoward",
            "onBoat": true
        }], "onBoat"))
        .toBe(true);
});
test("Predicate is truthy on all elements or not", () => {
    expect(truthCheck([{
            "single": "yes"
        }], "single"))
        .toBe(true);
});
test("Predicate is truthy on all elements or not", () => {
    expect(truthCheck([{
            "single": ""
        }, {
            "single": "double"
        }], "single"))
        .toBe(false);
});
test("Predicate is truthy on all elements or not", () => {
    expect(truthCheck([{
            "single": "double"
        }, {
            "single": undefined
        }], "single"))
        .toBe(false);
});
test("Predicate is truthy on all elements or not", () => {
    expect(truthCheck([{
            "single": "double"
        }, {
            "single": NaN
        }], "single"))
        .toBe(false);
});