// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/missing-letters
function fearNotLetter(str) {
    // keeps track of sequential character code. e.g. 'a' = 97, 'b' = 98...
    let counter = str.charCodeAt(0);
    for (let i = 0; i < str.length; i++) {
        if (str.charCodeAt(i) !== counter) {
            return String.fromCharCode(counter);
        }
        counter += 1;
    };
    return;
}

module.exports = fearNotLetter;