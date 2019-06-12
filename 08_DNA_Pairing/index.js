// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/dna-pairing
function pairElement(str) {
    const strArray = [...str];
    const pairs = {
        A: "T",
        T: "A",
        C: "G",
        G: "C"
    }
    return strArray.map(char => {
        return [char, pairs[char]];
    });
}

module.exports = pairElement;