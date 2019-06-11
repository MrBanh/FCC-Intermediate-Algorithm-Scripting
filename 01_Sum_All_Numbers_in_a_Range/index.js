// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-numbers-in-a-range

function sumAll(arr) {
    let sum = 0
    let upper, lower;
    if (arr[0] > arr[1]) {
        upper = arr[0]
        lower = arr[1]
    } else {
        upper = arr[1]
        lower = arr[0]
    }
    for (var i = lower; i <= upper; i++) {
        sum = sum + i
    };
    return sum;
}

module.exports = sumAll;