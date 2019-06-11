/*
Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both.
In other words, return the symmetric difference of the two arrays.
*/
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