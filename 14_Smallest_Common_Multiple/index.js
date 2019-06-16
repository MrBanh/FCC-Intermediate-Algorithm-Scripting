// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/smallest-common-multiple
/**
 * @param {*} arr       Array for sequence of numbers
 * @returns             smallest common multiple of the sequence
 */
function smallestCommons(arr) {
    // Use the greatest common divisor to compute LCM
    // https://en.wikipedia.org/wiki/Least_common_multiple

    // Determine the upper and lower number
    let [upper, lower] = arr[0] > arr[1] ? [arr[0], arr[1]] : [arr[1], arr[0]];

    // Array for the sequence of the range between lower and upper (inclusive)
    const numbers = Array.from({
        length: upper + 1
    }, (_, val) => val).slice(lower);

    // Euclidean Algorithm to obtain greatest common divisor
    // https://en.wikipedia.org/wiki/Euclidean_algorithm
    const gcd = (a, b) => {
        // base case, if a % b is 0, gcd is b
        if (a % b === 0) {
            return b;
        } else {
            // Recursively call gcd()
            return gcd(b, a % b);
        }
    };

    // Use Array.prototype.reduce to calculate LCM
    // lcm(a, b) = (a * b) / gcd(a, b)
    // where gcd is the greatest common divisor of a and b
    return numbers.reduce((acc, curVal) => {
        return ((acc * curVal) / gcd(acc, curVal));
    }, 1);
}


module.exports = smallestCommons;