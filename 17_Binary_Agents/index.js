// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/binary-agents
/**
 * @param {*} str       Binary numbers as a string
 * @returns             Binary converted to text
 */
function binaryAgent(str) {
    // Get an array of all binary numbers
    const binaries = str.split(' ');

    // using the .map, each binary is passed into the binaryToDecimal function
    // binaryToDecimal returns all of the decimal conversion
    // The ... spread syntax expands the array of decimals, and passes them into the String.fromCharCode function
    return String.fromCharCode(...binaries.map(binaryToDecimal))
}


/**
 * https://www.wikihow.com/Convert-from-Binary-to-Decimal
 * @param {*} binaryStr     Binary as a string
 * @returns                 Binary converted to decimal
 */
const binaryToDecimal = (binaryStr) => {
    // Base case, only 1 number in the binary string
    if (binaryStr.length === 1) {
        return parseInt(binaryStr[0]) * (2 ** (binaryStr.length - 1))
    } else {
        // Recursively call binaryToDecimal to convert each number based on its positional notation
        // For example: 10011011
        // = (1)*2^7 + (0)*2^6 + (0)*2^5 + (1)*2^4 + (1)*2^3 + (0)*2^2 + (1)*2^1 + (1)*2^0
        // = 155
        return parseInt(binaryStr[0]) * (2 ** (binaryStr.length - 1)) +
            binaryToDecimal(binaryStr.slice(1));
    }
};


module.exports = binaryAgent;