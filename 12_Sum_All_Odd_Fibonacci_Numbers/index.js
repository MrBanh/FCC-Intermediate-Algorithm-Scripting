/**
 * @param {number} num      Positive integer which is used to capture odd Fibonacci numbers <= num
 * @returns                 Sum of odd fibonacci numbers that are <= num
 */
function sumFibs(num) {
    // Array to capture all fibonacci numbers up to num (argument)
    const fibs = [1, 1];

    // Use a loop to generate fibonacci numbers, up to num (inclusive)
    while (true) {
        // Generate the next fibonacci number
        let newFibNum = fibs[fibs.length - 1] + fibs[fibs.length - 2];
        if (newFibNum > num) { // If that new fibonacci number is > num, break out of loop (don't include in fibs array)
            break;
        } else { // The new fibonacci number is still <= num, add to fibs Array
            fibs.push(newFibNum);
        }
    }

    // Use the Array.prototype.filter() to filter for only the odd numbers in fibs
    const oddFibs = fibs.filter(val => val % 2 === 1);

    // Use the Array.prototype.reduce() to add the odd fibonacci numbers and return
    return oddFibs.reduce((a, b) => a + b);
}

module.exports = sumFibs;