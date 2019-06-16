// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-primes
/**
 * @param {*} num       up to this number to test for prime-ness
 * @returns             sum of all prime numbers up to num (inclusive)
 */
function sumPrimes(num) {
    // Sieve_of_Eratosthenes
    // https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes

    // Generate sequence of numbers with Array.from
    // use the .slice to start at 2 through num
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
    let numbers = Array.from({
        length: num + 1
    }, (undef, n) => n).slice(2);

    // Let p equal to 2, the smallest prime number
    let p = numbers[0]; // 2

    // Array to store primes
    let primes = [];

    // Enumerate multiples of p by counting increments of p
    // from 2p to n (2p, 3p, 4p, ...)
    while (p ** 2 < num) {
        primes.push(p);

        // Returns a new array if only numbers not divisible current smallest prime
        numbers = numbers.filter(n => !(n % p === 0));

        // Go to the next smallest prime
        p = numbers[0];
    }

    // Remaining numbers in numbers Array are prime, concat to primes Array
    primes = [...primes, ...numbers];

    // Use the Array.prototype.reduce to sum and return
    return primes.reduce((acc, val) => acc + val);
}

module.exports = sumPrimes;