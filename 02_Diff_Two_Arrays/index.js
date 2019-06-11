// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/diff-two-arrays
function diffArray(arr1, arr2) {
    var newArr = [];
    // Same, same; but different.
    const onlyIn = (first, second) => {
        return first.filter(val => !second.includes(val))
    }
    newArr.push(...onlyIn(arr1, arr2));
    newArr.push(...onlyIn(arr2, arr1));
    return newArr;
}

module.exports = diffArray;